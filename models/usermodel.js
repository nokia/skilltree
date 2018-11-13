// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    username: String,
    email: String,
    hashData: Buffer,
    focusArea: {
        name: String,
        treeNames: [String],
    },
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
            categoryName: Number,
            skillIcon: String,
            description: String,
            achievedPoint: Number,
            maxPoint: Number,
            parents: [String],
            children: [
                {
                    name: String,
                    minPoint: Number,
                    recommended: Boolean
                }
            ]
        }
    ],
    mainTree: String,
    trees: [
        {
            name: String,
            skillNames: [String]
        }
    ]
}));
