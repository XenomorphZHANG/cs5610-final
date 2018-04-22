import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Rst} from '../../../models/rst.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-rst-new',
  templateUrl: './rst-new.component.html',
  styleUrls: ['./rst-new.component.css']
})
export class RstNewComponent implements OnInit {

  rst: Rst;
  user: User;
  rsts: Rst[];

  constructor(
    @Inject('SharedService') private sharedService,
    @Inject('RstService') private rstService,
    private router: Router
  ) { }

  createRst() {
    this.rstService.createRstForOwner(this.user._id, this.rst)
      .subscribe((rst: Rst) => {
        this.rst = rst;
        this.router.navigate(['/rst/' + rst._id + '/page']);
      });
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.rst = this.rstService.dumpRst();
    console.log(this.user.userType);
    this.rstService.findAllRstByUser(this.user._id).subscribe(
      (rsts: any[]) => {
        this.rsts = rsts;
        console.log(this.rsts);
      }
    );
  }

}
