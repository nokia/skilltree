const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file (token secret and mongo connection data)
 // mongoose models
var Category   = require('./models/categorymodel');
var User   = require('./models/usermodel');
var Tree = require('./models/treemodel');
var ApprovableTree = require('./models/treesforapprovemodel')
var Skill = require('./models/skillmodel');
var ApprovableSkill = require('./models/skillsforapprovemodel');
var ApprovableTraining = require('./models/trainingsforapprovemodel');

var pbkdf2 = require('./pbkdf2'); // get hash and salt generator and pw checker

const app = express();

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// serving static files
app.use(express.static('./public'));
// serves login.html for opening /
app.get('/', (req, res) => res.sendFile('login.html', { root: path.join(__dirname, './public') }));
// serves user.html for opening /user
app.get('/user', (req, res) => res.sendFile('user.html', { root: path.join(__dirname, './public/user') }));

app.get('/apitest', async function(req,res) {
	res.json({
		success: true
	});
});

// loads the routes from the routes directory
require('./routes')(app);

///////////////// END of DELETE SECTION

module.exports = app;

const httpServer = http.createServer(app);
httpServer.listen(3000);
