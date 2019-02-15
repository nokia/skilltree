const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file
var Category   = require('./models/categorymodel');
var User   = require('./models/usermodel'); // get our mongoose model
var Tree = require('./models/treemodel');
var ApprovableTree = require('./models/treesforapprovemodel')
var Skill = require('./models/skillmodel');
var ApprovableSkill = require('./models/skillsforapprovemodel');
var ApprovableTraining = require('./models/trainingsforapprovemodel');
var pbkdf2 = require('./pbkdf2'); // get hash generator and pw checker

const app = express();

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// serving static files and opening login.html
app.use(express.static('./public'));
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './public') }));
app.get('/user', (req, res) => res.sendFile('user.html', { root: path.join(__dirname, './public/user') }));

app.get('/apitest', async function(req,res) {
	res.json({
		success: true
	});
});


app.post('/registration', async function(req, res) {
	// search for username in db
    var user = await findUser(req.body.username);

	if (!user) { // if new user
		var hashData = pbkdf2.hashPassword(req.body.password);

		var focusAreaTrees = await Tree.find({focusArea: req.body.focusArea}, {_id: 0, name: 1}, function (err, trees) {
							if (err) throw err;
							return trees;
						});

		for (var i = 0; i < focusAreaTrees.length; ++i) {
			focusAreaTrees[i] = focusAreaTrees[i].name; //	lehet enelkul?
		}

		// get all categories from db
		var categories = await Category.find({}, function (err, categories) {
							if (err) throw err;
							return categories;
						});

		var newUser = new User({
			username: req.body.username,
			email: req.body.email,
			hashData: hashData,
			categories: categories,
			/*focusArea: {
					name: req.body.focusArea,
					treeNames: focusAreaTrees,
				},
			willingToTeach: req.body.willingToTeach*/
		});

		newUser.save(function(err) {
			if (err) throw err;

			const payload = {
				username: req.body.username,
			};
			var token = jwt.sign(payload, app.get('superSecret'), {
				expiresIn: '1d' // expires in 1 hour
			});

			// return the information including token as JSON
			res.json({
				success: true,
				token: token,
			});
		});
	} else { // if user already exists
		res.json({
			success: false
		});
	}
});

app.post('/auth', function(req, res) {
    // find the user
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            // check password
            if (!pbkdf2.verifyPassword(req.body.password, user.hashData)) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    username: req.body.username,
                    admin: user.admin
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn: '1d' // expires in 1 hour
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token,
                    message: "Authenticated.",
                });
            }
        }
    });
});


require('./routes')(app);

/*
*   ADMIN
*/
var adminRoute = express.Router();
app.use('/admin', adminRoute);

adminRoute.use(function(req, res, next) {
    var token = req.get('x-access-token');

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.status(403).send({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else if (decoded.admin) {
                req.decoded = decoded;
                next();
            } else {
                return res.status(403).send({
                    success: false,
                    message: 'Not admin.'
                });
            }
        });

    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

adminRoute.use(express.json());

//Approve a skill thats sent in the body as skillforaproval to the api
adminRoute.post('/approveskill', async function (req, res)  {
	var skillforapproval = req.body;
	var approvecollection = await ApprovableSkill.find( {} , async function(err, approvecollection) {
		if(err) throw err;
		else return approvecollection;
	});

	//Look for the skill in the database, if already exists
	var globalskill = undefined;
	globalskill = await findSkillByName(skillforaproval.name);

	//Check if skill is already in the database or not
	if(globalskill !== null )
	{
		res.json({
			success: false,
			message: "Skill already exists"
		});
	}
	else  //If its not, add to the database
	{
		newGlobalSkill = new Skill({
			name: skillforapproval.name,
			categoryName: skillforapproval.categoryName,
			skillIcon: skillforapproval.skillIcon,
			description: skillforapproval.description,
			descriptionWikipediaURL: skillforapproval.descriptionWikipediaURL,
			pointDescription: skillforapproval.pointDescription,
			maxPoint: skillforapproval.maxPoint,
			parents: skillforapproval.parent,
			children: [
				{
					name: skillforapproval.name,
					minPoint: skillforapproval.minPoint,
					recommended: skillforapproval.recommended
				}
			],
			trainings: [
				{
					name: skillforapproval.training.name,
					level: skillforapproval.training.level,
					shortDescription: skillforapproval.training.shortDescription,
					URL: skillforapproval.training.URL,
					goal: skillforapproval.training.goal,
					length: skillforapproval.traininglength,
					language: skillforapproval.training.language
				}
			]
		});
		newGlobalSkill.save();

		console.log(approvecollection);
		console.log("----------");
		var dependency = [];
		await getDependency(approvecollection, skillforapproval, dependency);

		console.log(dependency);

		var lastdependency = dependency[dependency.length-1];

		for(var i=0;i<dependency.length;i++)
		{
			var globalskill = await findSkillByName(dependency[i].name);
			if(globalskill !== null)
			{
				res.json({
					success: false,
					message: "dependency " +i + " " + dependency[i].name + " is already in database"
				});
			}
			else
			{
				newGlobalSkill = new Skill({
					name: dependency[i].name,
					categoryName: dependency[i].categoryName,
					skillIcon: dependency[i].skillIcon,
					description: dependency[i].description,
					pointDescription: dependency[i].pointDescription,
					maxPoint: dependency[i].maxPoint,
					parents: dependency[i].parent,
					children: [
						{
							name: dependency[i].name,
							minPoint: dependency[i].minPoint,
							recommended: dependency[i].recommended
						}
					],
					trainings: [
						{
							name: dependency[i].training.name,
							level: dependency[i].training.level,
							shortDescription: dependency[i].training.shortDescription,
							URL: dependency[i].training.URL,
							goal: dependency[i].training.goal,
							length: dependency[i].traininglength,
							language: dependency[i].training.language
						}
					]
				});
				newGlobalSkill.save();
			}
		}

		for(var i=0; i<lastdependency.parents.length; i++)
		{
			var lastdependencyParent =  await Skill.find( { name : lastdependency.parents[i] } , async function(err, lastdependencyParent){
				if(err) throw err;
				else return lastdependencyParent;
			});

			lastdependencyParent.children.push({
				name: lastdependency.name,
				minPoint: 0, //TODO skillsforapproval model to be changed, got no real data to be read
				recommended: false // ^
			});

			lastdependencyParent.save();

			res.json({
				message: "Succes",
				success: true
			});
		}
	}
});

adminRoute.post('/edittree', async function (req, res) {
    var data = req.body;

    var globalTree = await Tree.findOne({
                "name": data.name
        }, function (err, tree) {
                if (err) throw err;
        return tree;
    });

    var sn = await sortTree(data.skills);
    globalTree.focusArea = data.focusArea;
	globalTree.description = data.description;
    globalTree.skillNames = sn;
    globalTree.save(function (err) {if (err) throw err;});

    User.find({} , (err, users) => {
        if (err) throw err;

        users.map(user => {
            if (user.trees.find(obj => obj.name == data.name) != undefined) {
                user.trees.find(obj => obj.name == data.name).focusArea = data.focusArea;
				user.trees.find(obj => obj.name == data.name).description = data.description;
                user.trees.find(obj => obj.name == data.name).skillNames = sn;

                user.save(function (err) {if (err) throw err;});
            }
        })
    });
    res.json({
        success: true
    });
});

adminRoute.post('/editskill', async function (req, res) {
	var data = req.body;

	var skill = await findSkillByName(data.name);

	for (var i = 0; i < skill.parents.length; ++i) {
		var parent = await findSkillByName(skill.parents[i]);

		parent.children = parent.children.filter(obj => obj.name != skill.name);

		parent.save(function (err) {if (err) throw err;});
	}

	for (var i = 0; i < skill.children.length; ++i) {
		var child = await findSkillByName(skill.children[i].name);

		child.parents = child.parents.filter(obj => obj != skill.name);

		child.save(function (err) {if (err) throw err;});
	}

	skill.name = data.name;
	skill.description = data.description;
	skill.descriptionWikipediaURL = data.descriptionWikipediaURL;
	skill.skillIcon = data.skillIcon;
	skill.categoryName = data.categoryName;
	skill.maxPoint = data.maxPoint;
	skill.pointDescription = data.pointDescription;
	skill.parents = data.parents.map(obj => obj.name);
	skill.children = data.children;
	skill.trainings = data.trainings;

	if (data.maxPoint < skill.achievedPoint) skill.achievedPoint = data.maxPoint;

	skill.save(function (err) {if (err) throw err;});

	User.find({} , async function (err, users) {
        if (err) throw err;

        users.map(async function (user)  {
			if (user.skills.find(obj => obj.name == data.name) != undefined) {
				var userSkill = (user.skills.find(obj => obj.name == data.name));

				for (var i = 0; i < userSkill.parents.length; ++i) user.skills.find(obj => obj.name == userSkill.parents[i]).children = user.skills.find(obj => obj.name == userSkill.parents[i]).children.filter(obj => obj.name != userSkill.name);
				for (var i = 0; i < userSkill.children.length; ++i) {
					if (user.skills.find(obj => obj.name == userSkill.children[i].name) != undefined) user.skills.find(obj => obj.name == userSkill.children[i].name).parents = user.skills.find(obj => obj.name == userSkill.children[i].name).parents.filter(obj => obj != userSkill.name);
				}

				var parentNames = [];
		        for (var i = 0; i < data.parents.length; ++i) {
		            if (user.skills.find(obj => obj.name == data.parents[i].name) == undefined) { // add parent skill to user if not already there
		                var parent = await findSkillByName(data.parents[i].name);
		                user.skills.push(parent);
		            }
		            // add new skill as child of parent skill
		            user.skills.find(obj => obj.name == data.parents[i].name).children.push({name: data.name, minPoint: data.parents[i].minPoint, recommended: data.parents[i].recommended});
		            // when we save the new skill we only need the name of the parents (no minPoint and recommended)
		            parentNames.push(data.parents[i].name);
		        }

				for (var i = 0; i < data.children.length; ++i) {
		            if (user.skills.find(obj => obj.name == data.children[i].name) == undefined) { // add parent skill to user if not already there
		                var child = await findSkillByName(data.children[i].name);
		                user.skills.push(child);
		            }
		            // add new skill as child of parent skill
		            user.skills.find(obj => obj.name == data.children[i].name).parents.push(data.name);

					var trees = user.trees.filter(obj => obj.skillNames.find(obj => obj == data.children[i].name) != undefined);
					for (var j = 0; j < trees.length; ++j) {
						var skillList = trees[j].skillNames;
						if (skillList.find(obj => obj == data.name) == undefined) skillList.push(data.name);
						var skillsToSort = [];
						for (var k = 0; k < skillList.length; ++k) skillsToSort = user.skills.filter(obj => skillList.find(obj2 => obj2 == obj.name) != undefined);
						var sn = await sortTree(skillsToSort);
						user.trees.find(obj => obj.name == trees[j].name).skillNames = sn;
					}
		        }

				userSkill.name = data.name;
		    userSkill.description = data.description;
				userSkill.descriptionWikipediaURL = data.descriptionWikipediaURL;
		    userSkill.skillIcon = data.skillIcon;
		    userSkill.categoryName = data.categoryName;
		    userSkill.maxPoint = data.maxPoint;
		    userSkill.pointDescription = data.pointDescription;
				userSkill.parents = parentNames;
				userSkill.children = data.children;
		    userSkill.trainings = data.trainings;

				if (data.maxPoint < userSkill.achievedPoint) userSkill.achievedPoint = data.maxPoint;

				//user.skills.find(obj => obj.name == data.name) = skill;
				user.save(function (err) {if (err) throw err;});
			}
        })
    })

	res.json({
		success: true
	});
});

// approves a tree.
adminRoute.post('/approvetree', async function (req, res) {
    var data = req.body;

    var globalTree = await Tree.findOne({
        name: data.name
    }, function(err, tree) {
        if (err) throw err;
		return tree;
    });

    if (globalTree == undefined) {
        var tree = await ApprovableTree.findOne({
            username: data.username,
            name: data.name
        }, function(err, tree) {
            if (err) throw err;
            return tree;
        });

        var newTree = new Tree({
            name: tree.name,
            focusArea: tree.focusArea,
			description: tree.description,
            skillNames: tree.skillNames
        });

        newTree.save(function (err) {if (err) throw err;});

        await ApprovableTree.remove({ // delete ALL trees from approve with this name
            name: data.name
        });
    }
});

adminRoute.post('/approvetraining', async function (req, res) {
	var data = req.body;

    var globalSkill = await findSkillByName(data.skillName);

    if (globalSkill.trainings.find(obj => obj.name == data.name) == undefined) {
        var training = await ApprovableTraining.findOne({
            username: data.username,
            skillName: data.skillName,
            name: data.name
        }, function(err, training) {
            if (err) throw err;
            return training;
        });

        globalSkill.trainings.push({
            name: training.name,
            level: training.level,
            shortDescription: training.shortDescription,
            URL: training.URL,
            goal: training.goal,
            length: training.length,
            language: training.language
        });

        globalSkill.save(function (err) {if (err) throw err;});

        User.find({} , (err, users) => {
            if (err) throw err;

            users.map(user => {
                if (user.skills.find(obj => obj.name == data.skillName) != undefined) {
                    user.skills.find(obj => obj.name == data.skillName).trainings.push({
                        name: training.name,
                        level: training.level,
                        shortDescription: training.shortDescription,
                        URL: training.URL,
                        goal: training.goal,
                        length: training.length,
                        language: training.language
                    });

                    user.save(function (err) {if (err) throw err;});
                }
            })
        });
        await ApprovableTraining.remove({ // delete ALL trainings for the skill from approve with this name
            skillName: data.skillName,
            name: data.name
        });
    }
});

//drops the offers from global skills. Needed if we delete users
adminRoute.post('/dropoffers', async function (req, res) {
	Skill.find({} , (err, skills) => {
		if(err) console.log("error");
		skills.map(skill => {
			skill.offers = [];
			skill.save(  function (err) {if (err) throw err;} );
		})
	})
});

adminRoute.post('/setadmin', async function (req, res) {
	User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'User not found.'
            });
        } else if (user) {
			if (req.body.give) user.admin = true;
			else user.admin = false;
			user.save(function (err) {if (err) throw err;});

			res.json({
				success: true
			});
		}
	});
});

/*
*   END OF ADMIN
*/

//DELETE FUNCTIONS, to be separated in a delete.js file or smth

adminRoute.post('/deleteUser', async function (req,res){
	User.deleteOne( {username: request.body.username }  , function (err) {
		if (err) throw err;
		else res.json({
			success: true,
			message: "User deleted"
		})
	});
});

adminRoute.get('/testAdmin', async function (req,res){
	res.json({
		success: true
	});
});

///////////////// END of DELETE SECTION

// returns the user data of the username provided
async function findUser(unm) {
	var user = await User.findOne({
		username: unm,
	}, function (err, user) {
		if (err) throw err;
		return user;
	});
	return user;
}

// returns the skill data of the skillname provided
async function findSkillByName(qname){
	var skillToReturn = await Skill.findOne({
		"name": qname
	}, function (err, parent) {
		if (err) throw err;
		return skillToReturn;
	});
	return skillToReturn;
}

module.exports = app;

const httpServer = http.createServer(app);
httpServer.listen(3000);
