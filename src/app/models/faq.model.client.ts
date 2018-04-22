export class Faq {
  _id: String;
  question: String;
  followups: any[];
  _user: String;
  dateCreated: String;

  constructor(_id: String, question: String, _user: String) {
    this._id = _id;
    this.question = question;
    this._user = _user;
    this.followups = [];
  }
}
