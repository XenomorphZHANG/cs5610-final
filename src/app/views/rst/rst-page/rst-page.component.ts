import {Component, Inject, OnInit} from '@angular/core';
import {Rst} from '../../../models/rst.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../../../models/review.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-rst-page',
  templateUrl: './rst-page.component.html',
  styleUrls: ['./rst-page.component.css']
})
export class RstPageComponent implements OnInit {

  rst: Rst;
  reviews: Review[];
  user: User;

  lat: Number;
  lng: Number;

  constructor(
    @Inject('RstService') private rstService,
    @Inject('ReviewService') private reviewService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  newReview() {
    if (this.user === undefined) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['../review/new'], {relativeTo: this.activatedRoute});
    }
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    this.activatedRoute.params.subscribe((params: any) => {
      this.rstService.findRstById(params['rstid']).subscribe(
        (rst: Rst) => {
          this.rst = rst;
          this.lat = Number(rst.coordinates.latitude);
          this.lng = Number(rst.coordinates.longitude);
        }
      );
      this.reviewService.findReviewsByRst(params['rstid']).subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
        }
      );
      this.reviewService.findReviewsByUser(this.user._id).subscribe(
        (reviews: Review[]) => {
          this.reviews = reviews;
          console.log(this.user.username);
        }
      );
    });
  }

}
