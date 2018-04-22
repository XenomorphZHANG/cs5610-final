import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Review} from '../models/review.model.client';

@Injectable()
export class ReviewService {
  constructor(
    private http: Http,
    private router: Router,
    @Inject('SharedService') private sharedService
  ) {}

  baseURL = environment.baseUrl;

  dumpReview() {
    return new Review(undefined, undefined, undefined);
  }

  createReview(userId: String, rstId: String, review: Review) {
    const url = this.baseURL + '/api/user/' + userId + '/rst/' + rstId + '/review';
    return this.http.post(url, review)
      .map((response: Response) => {
        return response.json();
      });
  }

  findReviewById(reviewId: String) {
    return this.http.get(this.baseURL + '/api/review/' + reviewId)
      .map((response: Response) => {
        return response.json();
      });
  }

  findReviewsByUser(userId: String) {
    return this.http.get(this.baseURL + '/api/user/' + userId + '/review')
      .map((response: Response) => {
        return response.json();
      });
  }

  findReviewsByRst(rstId: String) {
    return this.http.get(this.baseURL + '/api/rst/' + rstId + '/review')
      .map((response: Response) => {
        return response.json();
      });
  }

  updateReview(reviewId: String, review: Review) {
    return this.http.put(this.baseURL + '/api/review/' + reviewId, review)
      .map((res: Response) => {
        return res.json();
      });
  }

  reorderReviewsForUser(userId, startIndex, endIndex) {
    return this.http.post(this.baseURL + '/api/user/' + userId + '/review?start=' + startIndex + '&end=' + endIndex, '');
  }

  deleteReview(reviewId: String) {
    return this.http.delete(this.baseURL + '/api/review/' + reviewId);
  }
}
