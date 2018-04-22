import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../../../models/review.model.client';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  review: Review;

  constructor(
    @Inject('ReviewService') private reviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.reviewService.findReviewById(params['revid']).subscribe(
        (review: Review) => {
          this.review = review;
        }
      );
    });
  }

  updateReview() {
    this.reviewService.updateReview(this.review._id, this.review).subscribe(
      () => {
        this.router.navigate(['../../page'], {relativeTo: this.activatedRoute});
      }
    );
  }

  deleteReview() {
    this.reviewService.deleteReview(this.review._id).subscribe(
      () => {
        this.router.navigate(['../../page'], {relativeTo: this.activatedRoute});
      }
    );
  }
}
