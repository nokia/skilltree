module.exports = function(app){
    protectedRoute.use(function(req, res, next) {
        var token = req.get('x-access-token');

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    return res.sendFile('login.html', { root: path.join(__dirname, './public') });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });

        } else {
            return res.sendFile('login.html', { root: path.join(__dirname, './public') });
        }
    });

    protectedRoute.use(express.json());

    protectedRoute.get('/userdata', function (req, res) {
        User.findOne({
            username: req.decoded.username
        }, async function(err, userdata) {
            if (err) throw err;

            if (!userdata) {
                res.json({
                    success: false,
                    message: 'User not found.'
                });
            } else if (userdata) {
                user = userdata.toObject();
                delete user.__v;
                delete user._id;
                //delete user.email;
                delete user.hashData;

                if (user.mainTree == undefined) { // first login
                    var trees = await Tree.find({}, function (err, trees) {
                        if (err) throw err;
                        return trees;
                    });

                    user.allTreeNames = trees;
                }

                if (user.admin) {
                    var trees = await ApprovableTree.find({}, function(err, trees) {
                        if (err) throw err;
                        return trees;
                    });

                    var skills = await ApprovableSkill.find({}, function(err, skills) {
                        if (err) throw err;
                        return skills;
                    });

                    var trainings = await ApprovableTraining.find({}, function(err, trainings) {
                        if (err) throw err;
                        return trainings;
                    });
                    user.apprTrees = trees;
                    user.apprSkills = skills;
                    user.apprTrainings = trainings;
                }
                return res.json(user);
            }
        });
    });

    // getting the skilldata of a skillname (used for offers)
    protectedRoute.get('/offers', function(req, res) {
        Skill.findOne({
            name: req.body.name
        }, async function(err, skilldata) {
            if(err) throw err;

            if(!skilldata){
                escape.json({
                    success: false,
                    message: 'User not found.'
                });
            } else if (skilldata) {
                skill = skilldata.toObject();

                return res.json(skilldata);
            }
        });
    });

    // getting the skilldata of a skillname (used for offers)
    protectedRoute.get('/skillsforapproval', function(req, res) {
        ApprovableSkill.find({} , async function(err, skillsforapproval) {
            if(err) throw err;

            if(skillsforapproval !== undefined){
                return res.json(skillsforapproval);
            } else
            {
                res.json({
                    success: false
                });
            }
        });
    });

    // Search for users to view by name
    protectedRoute.post('/searchUsersByName', async function (req, res) {
        var data = req.body;
        var foundUsers = await User.find({
            "username": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, function (err, user) {
            if (err) throw err;
            return user;
        });
        var resUsers = [];
        for (var i = 0; i < foundUsers.length; i++) {
            resUsers[i] = {name: foundUsers[i].username};
        }
        res.json(resUsers);
    });

    // searchkes a skill for editor
    protectedRoute.post('/searchSkillsByName', async function (req, res) {
        var data = req.body;

        var user = await findUser(req.decoded.username);

        user = user.toObject();
        var foundUserSkills = user.skills.filter(obj => obj.name.match(new RegExp(".*" + data.value + ".*", "i")) != null);

        var foundGlobalSkills = await Skill.find({
            "name": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, function (err, skills) {
            if (err) throw err;
            return skills;
        });

        var resSkills = [];
        for (var i = 0; foundUserSkills != undefined && i < foundUserSkills.length; i++) {
            resSkills.push({name: foundUserSkills[i].name});
        }
        for (var i = 0; i < foundGlobalSkills.length; i++) {
            if (resSkills.find(obj => obj == foundGlobalSkills[i].name) == undefined) resSkills[i] = {name: foundGlobalSkills[i].name};
        }
        res.json(resSkills);
    });

    // searchkes a skill for editor
    protectedRoute.post('/searchUserSkillsByName', async function (req, res) {
        var data = req.body;

        var user = await findUser(req.decoded.username);

        user = user.toObject();
        var foundUserSkills = user.skills.filter(obj => obj.name.match(new RegExp(".*" + data.value + ".*", "i")) != null);

        var resSkills = [];
        for (var i = 0; foundUserSkills != undefined && i < foundUserSkills.length; i++) {
            resSkills.push({name: foundUserSkills[i].name});
        }

        res.json(resSkills);
    });

    // Search for trees to add while typing
    protectedRoute.post('/searchTreesByName', async function (req, res) {
        var data = req.body;
        var foundTrees = await Tree.find({
            "name": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, function (err, tree) {
            if (err) throw err;
            return tree;
        });
        var resTrees = [];
        for (var i = 0; i < foundTrees.length; i++) {
            resTrees[i] = {name: foundTrees[i].name};
        }
        res.json(resTrees);
    });


    // Getting the name, willingToTeach, teachingDay, teachingTime, location, focusArea, skills and maintree of a user.
    protectedRoute.post('/getPublicUserData', async function (req, res) {
        var data = req.body;
        var foundUsers = await User.find({
            "username": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, 'username mainTree willingToTeach teachingDay teachingTime location focusArea skills trees', function (err, user) {
            if (err) throw err;
            return user;
        });
        res.json(foundUsers);
    });

    // Getting the name, skillnames, focusarea of a tree.
    protectedRoute.post('/getPublicTreeData', async function (req, res) {
        var data = req.body;
        var foundTrees = await Tree.find({
            "name": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, function (err, tree) {
            if (err) throw err;
            return tree;
        });
        res.json(foundTrees);
    });

    // Getting the name, caterory, descs of a skill, and give a list of the people, who have it.
    protectedRoute.post('/getPublicSkillData', async function (req, res) {
        var data = req.body;
        var outData = []; // this is required, because adding a new param to a queried mongo object bugs rn.
        var outUsers = []; // array of users that have the skill.
        var foundSkills = await Skill.find({
            "name": {$regex : ".*" + data.value + ".*", '$options' : 'i'}
        }, 'name categoryName description descriptionWikipediaURL pointDescription', function(err, skill) {
            if (err) throw err;
            return skill;
        });
        for (var s = 0; s < foundSkills.length; s++) {
            foundSkills[s].users = [];
            var foundUsers = await User.find({}, 'username skills', function(err, user) {
                return user;
            });
            outUsers = [];
            for (var i = 0; i < foundUsers.length; i++) {
                if (foundUsers[i].skills.map(obj => obj.name).includes(foundSkills[s].name)) {
                    outUsers.push({username: foundUsers[i].username, skill: foundUsers[i].skills.find(obj => obj.name == foundSkills[s].name)});
                }
            }
            outData.push({
                name: foundSkills[s].name,
                categoryName: foundSkills[s].categoryName,
                description: foundSkills[s].description,
                descriptionWikipediaURL: foundSkills[s].descriptionWikipediaURL,
                pointDescription: foundSkills[s].pointDescription,
                users: outUsers
            });
        }
        res.json(outData);
    });

    // Adds a public tree to the current user.
    protectedRoute.post('/addTreeToUser', async function (req, res){
        var data = req.body;
        var user = await findUser(req.decoded.username);
        var tree = await Tree.findOne({"name": data.value},  function (err, tree) {
            if (err) throw err;
            return tree;
        });

        if (tree != undefined) {
            if (user.trees.find(obj => obj.name == tree.name) == undefined){
                await sortAndAddTreeToUser(tree, user);

                res.json({
                    success: true,
                    name: tree.name
                });
            } else {
                res.json({
                    message: "existing",
                    success: false
                });
            }
        } else {
            res.json({
                message: "notfound",
                success: false
            });
        }
    });

    // gets a skill and all it's dependencies by name.
    protectedRoute.post('/getskill', async function (req, res) {
        var data = req.body;

        var user = await findUser(req.decoded.username);

        if (!user) {
            res.json({
                success: false,
                message: 'User not found.'
            });
        } else {
            var skill = user.skills.find(obj => obj.name == data.value);

            if (skill == undefined) {
                var skill = await findSkillByName(data.value);
                if (!skill) {
                    res.json({
                        success: false
                    });
                }
            }

            var dependency = [];
            await getDependency(user.skills, skill, dependency);

            res.json({
                success: true,
                skill: skill,
                dependency: dependency
            });
        }
    });
}
