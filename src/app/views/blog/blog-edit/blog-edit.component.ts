import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../../../models/blog.model.client';
import {User} from '../../../models/user.model.client';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(
    @Inject('BlogService') private blogService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  blogId: String;
  newBlog: Blog;
  baseUrl: String = environment.baseUrl;

  updateBlog() {
    this.blogService.updateBlog(this.blogId, this.newBlog)
      .subscribe((blog: Blog) => {
        this.newBlog = blog;
        this.router.navigate(['..'], {relativeTo: this.activatedRoute});
      });
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.blogId = params['bid'];
        this.blogService.findBlogById(this.blogId)
          .subscribe((blog: Blog) => {
            this.newBlog = blog;
          });
      }
    );
  }

}
