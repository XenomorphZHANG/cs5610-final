export class Blog {
  _id: String;
  content: String;
  image_urls: String;
  reviews: [String];
  title: String;
  rating: number;
  dateCreated: String;

  constructor(_id: String, title: String) {
    this._id = _id;
    this.title = title;
  }
}
