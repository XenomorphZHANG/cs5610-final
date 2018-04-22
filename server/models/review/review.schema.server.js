var mongoose = require("mongoose");

var ReviewSchema = mongoose.Schema({
  content: String,
  rating: Number,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  _rst: {type: mongoose.Schema.Types.ObjectId, ref: 'rstModel'},
  dateCreated: {type: String, default: new Date().toLocaleString() }
}, {collection:'review'});

module.exports = ReviewSchema;
