// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectID = mongoose.Schema.Types.ObjectId;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Skill', new Schema({
    id: Number,
    name: String,
    categoryID: Number,
    skillIcon: String,
    description: String,
    maxPoint: Number,
    parents: [Number],
    children: [
        {
            _id: ObjectID,
            minPoint: Number,
            recommended: Boolean
        }
    ]
}));
