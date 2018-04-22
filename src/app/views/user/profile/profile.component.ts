import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // 'username' and 'userId' discarded because 'user' can do their job
  user: User;
  updatedFlag: Boolean = false;
  updatedMsg: String = 'Updated!';

  constructor(
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // how to update password?
  updateUser() {
    // this.activatedRoute.params.subscribe(params => {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      (user: User) => {
        console.log(user);
        this.updatedFlag = true;
      }
    );
    // });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe(() => {});
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log('profile page: shared user:');
    console.log(this.user);
    // this.activatedRoute.params.subscribe((params: any) => {
    //   // alert('userId is' + this.userId);
    //   return this.userService.findUserById(params['userId'])
    //     .subscribe(
    //       (user: User) => {
    //         this.user = user;
    //         console.log(user);
    //       }
    //     );
    // });
  }
}
