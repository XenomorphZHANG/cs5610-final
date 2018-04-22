import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Blog} from '../../../models/blog.model.client';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {

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
  errFlag: boolean;
  errMsg: String = 'Please input title';

  ngOnInit() {
    this.user = this.sharedService.user;
    this.newBlog = new Blog(undefined, undefined);
  }

  createBlog(newBlog) {
    if (newBlog.title === undefined) {
      this.errFlag = true;
    }
    this.blogService.createBlog(this.user._id, newBlog)
      .subscribe(() =>
        this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  );
  }
}
