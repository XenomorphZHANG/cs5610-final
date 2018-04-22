var mongoose = require("mongoose");

var RstSchema = mongoose.Schema({
  id: String, // unique id from yelp
  name: String,
  categories: [
    {
      alias: String,
      title: String
    }
  ],
  content:String,
  rating: Number,
  review_count: Number,
  coordinates: {
    latitude: String,
    longitude: String
  },
  location: {
    city: String,
    country: String,
    address2: String,
    address3: String,
    state: String,
    address1: String,
    zip_code: String
  },
  image_url: String,
  price: String,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  reviews:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'reviewModel'}
  ],
  dateCreated: {type: String, default: new Date().toLocaleString() }
}, {collection:'rst'});

module.exports = RstSchema;
