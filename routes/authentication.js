const express = require('express');
const mongoose    = require('mongoose');
const jwt    = require('jsonwebtoken');

const Category   = require('../models/categorymodel');
const User   = require('../models/usermodel'); // get our mongoose model
const Tree = require('../models/treemodel');
const pbkdf2 = require('../pbkdf2');

module.exports = function (app) {
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

    async function findUser(unm) {
    	var user = await User.findOne({
    		username: unm,
    	}, function (err, user) {
    		if (err) throw err;
    		return user;
    	});
    	return user;
    }
}
