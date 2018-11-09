// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectID = mongoose.Schema.Types.ObjectId;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    username: String,
    email: String,
    hashData: Buffer,
    teacher: Boolean,
    categories: [
        {
            name: String,
            achievedPoint: Number,
            maxPoint: Number
        }
    ],
    skills: [
        {
            name: String,
            categoryID: ObjectID,
            skillIcon: String,
            description: String,
            achievedPoint: Number,
            maxPoint: Number,
            parents: [Number],
            children: [
                {
                    minPoint: Number,
                    recommended: Boolean
                }
            ]
        }
    ],
    mainTree: ObjectID,
    trees: [
        {
            name: String,
            skillIDs: [ObjectID]
        }
    ]
}));
