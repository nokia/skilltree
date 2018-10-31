const path = require('path');
const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file
var User   = require('./models/usermodel'); // get our mongoose model
var Trees = require('./models/treemodel');
var pbkdf2 = require('./pbkdf2'); // get hash generator and pw checker

const app = express();
const port = 80;

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.post('/registration', function(req, res) {
    var hashData = pbkdf2.hashPassword(req.body.password);

    var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        hashData: hashData,
    });

    User.findOne({
        username: req.body.username,
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            newUser.save(function(err) {
                if (err) throw err;

                res.json({
                    success: true
                });
            });
        } else {
            res.json({
                success: false
            });
        }
    });
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
                };
                var token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn: '60m' // expires in 1 hour
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

// serving static files and opening login.html
app.use(express.static('./public'));
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './public') }));
app.get('/user', (req, res) => res.sendFile('chartandtree.html', { root: path.join(__dirname, './public/user') }));

var getRoute = express.Router();
getRoute.use(function(req, res, next) {
    var token = req.get('x-access-token');

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                req.decoded = decoded;
                next();
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
getRoute.get('/userdata', function (req, res) {
    User.findOne({
        username: req.decoded.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'User not found.'
            });
        } else if (user) {
            return res.json(user.skillData);
        }
    });
});
getRoute.get('/treedata', function (req, res) {
    Trees.find({}, function (err, trees) {
        if (err) throw err;

        return res.json(trees);
    });
});
app.use('/get', getRoute);

var setRoute = express.Router();
setRoute.use(function(req, res, next) {
    var token = req.get('x-access-token');

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                req.decoded = decoded;
                next();
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
setRoute.use(express.json());
setRoute.post('/mytrees', function(req, res) {
    var data = req.body;

    User.findOne({
        username: req.decoded.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'User not found.'
            });
        } else if (user) {
            if (user.skillData == undefined) user.skillData = new Array();
            for (var i = 0; i < data.length; ++i) {
                if (user.skillData.find(obj => obj.treeID == data[i]) == undefined) {
                    user.skillData.push({treeID: data[i], skills: []});
                }

                user.save(function (err) {
                    if (err) throw err;
                });
            }
        }
    });
});
/*setRoute.post('/skilllevel', function(req, res) {
    var data = req.body;

    User.findOne({
        username: req.decoded.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'User not found.'
            });
        } else if (user) {
            for (var i = 0; i < data.length; ++i) {
                // itt baja van, a WebDev-hez(treeID: 1) hozzáad, a Managerhez(treeID: 0) nem. de hogy miert?
                if (user.skillData.find(obj => obj.treeID == data[i].treeID).skills.find(obj => obj.skillID == data[i].skillID) == undefined) user.skillData.find(obj => obj.treeID).skills.push({skillID: data[i].skillID});
                user.skillData.find(obj => obj.treeID == data[i].treeID).skills.find(obj => obj.skillID == data[i].skillID).skillLevel = data[i].skillLevel;
                user.save(function (err) {
                    if (err) throw err;
                });
            }
        }
    });
});*/
  setRoute.post('/submitAll', function(req, res) {
    var data = req.body;
    User.findOne({
        username: req.decoded.username
      }, function(err, user) {
        if (err) throw err;
        if (!user) {
          res.json({
            success: false,
            message: 'User not found.'
          });
        }
        else {
          for(var i = 0; i < data.length; ++i){
            for(var j = 0; j < data[i].skills.length; ++j){
                if(user.skillData.find(obj => obj.treeID == data[i].treeID).skills.find(obj => obj.skillID == data[i][j].skillID) == undefined){
                    user.skillData.find(obj => obj.treeID == data[i].treeID).skills.find(obj => obj.skillID == data[i][j].skillID) = data[i][j];
                }
            }
            user.save(function (err) {
                if (err) throw err;
            });
          }
        }
      }
    }

app.use('/set', setRoute);

app.listen(port);
