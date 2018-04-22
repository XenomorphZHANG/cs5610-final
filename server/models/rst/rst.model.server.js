var mongoose = require("mongoose");
var RstSchema = require("./rst.schema.server");
var rstModel = mongoose.model("rstModel", RstSchema);

var userModel = require("../user/user.model.server");

rstModel.findRstById = findRstById;
rstModel.findAllRsts = findAllRsts;
rstModel.findRstByYelpId = findRstByYelpId;
rstModel.createRstForOwner = createRstForOwner;
rstModel.createRstWithoutOwner = createRstWithoutOwner;
rstModel.deleteRst = deleteRst;
rstModel.findRstByUser = findRstByUser;
rstModel.updateRst = updateRst;

module.exports = rstModel;

function findRstById(rstId) {
  return rstModel.findById(rstId);
}

function findAllRsts() {
  return rstModel.find();
}

function findRstByYelpId(rstYelpId) {
  return rstModel.findOne({id: rstYelpId});
}

function createRstForOwner(userId, rst) {
  rst._user = userId;
  return rstModel.create(rst)
    .then(function(responseRst) {
      userModel.findUserById(responseRst._user)
        .then(function(user) {
          user.rsts.push(responseRst);
          return user.save();
        });
      return responseRst;
    });
}

function createRstWithoutOwner(rst) {
  return rstModel.create(rst);
}

function deleteRst(rstId) {
  rstModel.findById(rstId)
    .then(function(rst) {
      userModel.findUserById(rst._user)
        .then(function(user) {
          user.rsts.pull({_id: rstId});
          user.save();
        })
    });
  return rstModel.deleteOne({_id: rstId});
}

function findRstByUser(userId) {
  return rstModel.find({_user: userId})
    .populate('_user')
    .exec();
}

function updateRst(rstId, rst) {
  return rstModel.update({_id: rstId}, rst);
}


