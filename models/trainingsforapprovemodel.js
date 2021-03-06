// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('ApprovableTraining', new Schema({
    username: String,
    skillName: String,
    name: String,
    level: String,
    shortDescription: String,
    URL: String,
    URLLastAccessed: String,
    goal: String,
    length: String,
    language: String
}));
