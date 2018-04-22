var mongoose = require('mongoose');

// this block do not work
// var connectionString = 'mongodb://localhost:27017/webdev'; // for local
// if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
//   var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
//   var password = process.env.MLAB_PASSWORD_WEBDEV;
//   connectionString = 'mongodb://' + username + ':' + password;
//   connectionString += '@ds111648.mlab.com:11648/heroku_jmhwjlk9/webdev'; // use yours
// }


var db = mongoose.connect('mongodb://localhost:27017/final'); // for local mongodb
// var db = mongoose.connect('mongodb://xxxxxx', {useMongoClient: true});

module.exports = db;
