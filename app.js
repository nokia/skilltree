const path = require('path');
const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var cookieParser = require('cookie-parser');

var config = require('./config'); // get our config file
var User   = require('./usermodel'); // get our mongoose model
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
                    message: "jooooooooo",
                });
            }

        }

    });
});

// serving static files and opening login.html
app.use(express.static('./login'));
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './login') }));

var protectedRoutes = express.Router();
protectedRoutes.use(cookieParser());
protectedRoutes.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.cookies.loginToken;

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
                console.log(token);
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
protectedRoutes.use(express.static('./protected'));
protectedRoutes.get('/', (req, res) => res.sendFile('chartandtree.html', { root: path.join(__dirname, './protected') }));
app.use('/protected', protectedRoutes);

app.listen(port);
