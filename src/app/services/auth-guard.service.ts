import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('UserService') private userService, private router: Router) {}

  canActivate() {
    return this.userService.loggedIn();
  }
}
