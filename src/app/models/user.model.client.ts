export class User {
  _id: String;
  username: String;
  password: String;
  firstname: String;
  lastname: String;
  email: String;
  dateCreated: String;
  userType: String;

  constructor(_id: String, username: String, password: String, firstName: String, lastName: String, userType: String) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstname = firstName;
    this.lastname = lastName;
    this.userType = userType;
  }
}
