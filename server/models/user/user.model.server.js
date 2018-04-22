var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var userModel = mongoose.model("userModel", UserSchema);
userModel.findUserById = findUserById;
userModel.createUser = createUser;
userModel.deleteUser = deleteUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUserName = findUserByUserName;
userModel.updateUser = updateUser;
userModel.findFacebookUser = findFacebookUser;
userModel.findAllUsers = findAllUsers;

module.exports = userModel;

function findFacebookUser(id) {
  return userModel.findOne({"facebook.id": id});
}

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUserName(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function findAllUsers(){
  return userModel.find();
}

function updateUser(userId, user) {
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.deleteOne({_id: userId});
}
