import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {Rst} from '../../../models/rst.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-rst-list',
  templateUrl: './rst-list.component.html',
  styleUrls: ['./rst-list.component.css']
})
export class RstListComponent implements OnInit {

  // restaurant list for current user
  rsts: Rst[];
  user: User;

  // use Inject instead of import
  constructor(
    @Inject('RstService') private rstService,
    @Inject('SharedService') private sharedService,
  ) {}

  ngOnInit() {

    this.user = this.sharedService.user;
    // get all restaurants if the current user is 'admin'
    if (this.sharedService.user.userType === String('admin')) {
      this.rstService.findAllRsts().subscribe(
        (rsts: Rst[]) => {
          this.rsts = rsts;
        }
      );
    } else { // get restaurants for current 'owner'
      this.rstService.findRstsByUser(this.sharedService.user._id).subscribe(
        (rsts: Rst[]) => {
          this.rsts = rsts;
        }
      );
    }
  }

}
