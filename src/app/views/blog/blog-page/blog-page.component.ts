import {Component, Inject, OnInit} from '@angular/core';
import {Blog} from '../../../models/blog.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  constructor(
    @Inject('BlogService') private blogService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  blogId: String;
  blog: Blog;
  content: String;
  newReview = false;
  reviewContent: String;

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.blogId = params['bid'];
        this.blogService.findBlogById(this.blogId)
          .subscribe((blog: Blog) => {
            this.blog = blog;
            console.log(this.blog.image_urls);
          });
      }
    );
  }

  showAdd() {
    this.newReview = true;

  }
  addReview() {
    this.blogService.addReview(this.blogId, this.user.username, this.reviewContent)
      .subscribe(() => {
        // this.ref.detach();
        // this.ref.reattach();
        this.router.navigate(['/blog']);
      });
  }

}
