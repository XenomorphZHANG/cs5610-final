export class Review {
  _id: String;
  content: String;
  rating: number;
  dateCreated: String;

  constructor(_id: String, username: String, rating: number) {
    this._id = _id;
    this.content = username;
    this.rating = rating;
  }
}
