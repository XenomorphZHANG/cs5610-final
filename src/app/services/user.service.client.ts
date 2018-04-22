import { User } from '../models/user.model.client';
import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private router: Router,
    @Inject('SharedService') private sharedService
  ) { }

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options);
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  register(user: User) {

    this.options.withCredentials = true;
    const body = {
      username : user.username,
      password : user.password,
      firstname: user.firstname,
      lastname : user.lastname,
      email    : user.email,
      userType : user.userType,
    };

    return this.http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  dumpUser() {
    return new User(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  hello() {
    return this.http.get(this.baseUrl + '/api/user/hello');
  }

  findAllUsers() {
    return this.http.get(this.baseUrl + '/api/alluser')
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByUsername(username: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateUser(userId: String, user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId: String) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
