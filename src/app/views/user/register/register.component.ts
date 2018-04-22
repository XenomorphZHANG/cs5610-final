import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  verifyPwd: String;
  errorFlag: Boolean = false;
  errorMsg: String = 'Password inconsistent!';
  userType: String;
  types = ['owner', 'customer', 'professional', 'support'];

  constructor(
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private router: Router
  ) { }

  register() {
    if (this.user.username === undefined) {
      this.errorFlag = true;
      this.errorMsg = 'Username can not be empty';
    }

    if (this.user.password === undefined) {
      this.errorFlag = true;
      this.errorMsg = 'Password can not be empty';
    }
    console.log('from web' + this.user.userType);
    this.user.userType = this.userType;
    if (this.user.password === this.verifyPwd) {
      this.errorFlag = false;
      console.log(this.user.userType);
      this.userService.register(this.user).subscribe(
        (user: User) => {
          this.user = user;
          console.log(this.user);
          this.router.navigate(['/profile']);
        }, (err: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Username unavailable!';
        }
      );
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Password inconsistent!';
    }
  }

  onOptionsSelected(event) {
    console.log(event); // option value will be sent as event
  }

  ngOnInit() {
    this.user = this.userService.dumpUser();
    console.log(this.user);
    this.userService.hello().subscribe(
      (msg: string) => {
        console.log(msg);
      }
    );
  }

}
