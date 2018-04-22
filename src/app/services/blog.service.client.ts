import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Blog} from '../models/blog.model.client';

@Injectable()
export class BlogService {
  constructor(
    private http: Http,
    private router: Router,
    @Inject('SharedService') private sharedService
  ) {}

  baseURL = environment.baseUrl;

  findAllBlog() {
    const url = this.baseURL + '/api/blog';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  createBlog(userId: String, blog: Blog) {
    const url = this.baseURL + '/api/user/' + userId + '/blog';
    return this.http.post(url, blog)
      .map((response: Response) => {
        return response.json();
      });
  }

  addReview(blogId: String, username: String, content: String) {
    const url =  this.baseURL + '/api/blog/' + blogId + '/review';
    return this.http.post(url, {'content': username + ': ' + content})
      .map((response: Response) => {
        return response.json();
      });
  }

  findBlogById(blogId: String) {
    return this.http.get(this.baseURL + '/api/blog/' + blogId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateBlog(blogId: String, blog: Blog) {
    const url =  this.baseURL + '/api/blog/' + blogId;
    return this.http.put(url, blog)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteBlog(blogId: String) {
    const url = this.baseURL + '/api/blog/' + blogId;
    return this.http.delete(url);
  }
}
