var mongoose = require("mongoose");

var FaqSchema = mongoose.Schema({
  question: String,
  followups: [String],
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  dateCreated: {type: String, default: new Date().toLocaleString() }
}, {collection:'faq'});

module.exports = FaqSchema;
