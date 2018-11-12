// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectID = mongoose.Schema.Types.ObjectId;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Tree', new Schema({
    _id: ObjectID,
    name: String,
    skillIDs: [ObjectID],
}));
