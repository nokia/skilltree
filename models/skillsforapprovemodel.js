// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('ApprovableSkill', new Schema({
    username: String,
    name: String,
    categoryName: String,
    skillIcon: String,
    description: String,
    pointDescription: [String],
    maxPoint: Number,
    parents: [String],
    children: [
        {
            name: String,
            minPoint: Number,
            recommended: Boolean
        }
    ],
    trainings: [
        {
            date: String,
            level: String,
            place: String,
            teacher: String
        }
    ]
}));
