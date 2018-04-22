import {Component, Inject, OnInit} from '@angular/core';
import {Review} from '../../../models/review.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {

  userId: String;
  rstId: String;
  review: Review;

  constructor(
    @Inject('ReviewService') private reviewService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.review = this.reviewService.dumpReview();
    this.activatedRoute.params.subscribe((params: any) => {
      this.rstId = params['rstid'];
    });
  }

  createReview() {
    console.log(this.sharedService.user._id);
    console.log(this.rstId);
    this.reviewService.createReview(this.sharedService.user._id, this.rstId, this.review)
      .subscribe((review: Review) => {
        this.review = review;
        this.router.navigate(['../../page'], {relativeTo: this.activatedRoute});
      });
  }
}
