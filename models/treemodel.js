// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Tree', new Schema({
    treeID: Number,
    treeName: String,
    skills: [
        {
            skillID: Number,
            name: String,
            description: String,
            skillIcon: String,
            maxSkillLevel: Number,
            level: Number,
            children: [{skillID: Number}]
        }
    ],
}));