// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    username: String,
    admin: Boolean,
    email: String,
    hashData: Buffer,
    focusArea: {
        name: String,
        treeNames: [String],
    },
    location: String,
    willingToTeach: Boolean,
    teachingDay: String,
    teachingTime: String,
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
            categoryName: String,
            skillIcon: String,
            description: String,
            descriptionWikipediaURL: String,
            pointDescription: [String],
            achievedPoint: Number,
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
                    name: String,
                    level: Number,
                    description: String,
                    url: String,
                    urlLastAccessed: String
                }
            ],
            endorsement: [String]
        }
    ],
    mainTree: String,
    trees: [
        {
            name: String,
            skillNames: [String],
            focusArea: String
        }
    ]
}));
