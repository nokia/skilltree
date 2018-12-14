// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('ApprovableTraining', new Schema({
    skillName: String,
    name: String,
    level: Number,
    description: String,
    url: String,
    urlLastAccessed: String
}));
