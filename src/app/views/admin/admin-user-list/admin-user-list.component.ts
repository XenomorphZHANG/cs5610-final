import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  constructor(
    @Inject('UserService') private userService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  users: User[];

  selectUser: User;
  // editUser(user) {
  //   this.sharedService.user =
  // }

  showUser(user: User) {
    this.selectUser = user;
  }

  deleteUser() {
    this.userService.deleteUser(this.selectUser._id).subscribe(() => {});
  }

  updateUser() {
    // this.activatedRoute.params.subscribe(params => {
    this.userService.updateUser(this.selectUser._id, this.selectUser).subscribe(
      (user: User) => {
      }
    );
    // });
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userService.findAllUsers().subscribe(
      (users) => this.users = users
    );
  }

}
