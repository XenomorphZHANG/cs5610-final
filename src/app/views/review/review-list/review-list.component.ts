import {Component, Inject, OnInit} from '@angular/core';
import {Review} from '../../../models/review.model.client';
import {Rst} from '../../../models/rst.model.client';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[] = [];
  // rst: Rst;
  // user: User;
  userId: String;
  rstId: String;

  constructor(@Inject('ReviewService') private reviewService,
              @Inject('SharedService') private sharedService,
              @Inject('RstService') private rstService,
              private activatedRoute: ActivatedRoute) {
  }

  reorderReviews(indexes) {
    this.reviewService.reorderReviewsForUser(this.userId, indexes.startIndex, indexes.endIndex)
      .subscribe((data) => {
        console.log(data);
        }
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const user = this.sharedService.user;
        this.userId = user._id;
        // console.log(this.userId);
        this.rstId = params['rstId'];
        console.log(this.rstId);
        this.reviewService.findReviewsByUser(this.userId).subscribe(
          (reviews: Review[]) => {
            this.reviews = reviews;
          }
        );
      });
  }
}

