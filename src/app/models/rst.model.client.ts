export class Rst {
  _id: String;
  id: String; // unique id from yelp
  name: String;
  categories;
  content: String;
  rating: number;
  review_count: number;
  location;
  image_url: String;
  price: String;
  dateCreated: String;
  coordinates;

  constructor(_id: String, id: String, name: String) {
    this._id = _id;
    this.id = id;
    this.name = name;
  }
}
