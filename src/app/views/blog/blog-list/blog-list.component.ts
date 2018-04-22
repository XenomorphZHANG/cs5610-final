import {Component, Inject, OnInit} from '@angular/core';
import {Faq} from '../../../models/faq.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Blog} from '../../../models/blog.model.client';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(
    @Inject('BlogService') private blogService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  blogs: Blog[];
  errorFlag: boolean;
  errorMsg: String = 'Please login before ask question';

  createBlog() {
    if (this.user._id === undefined) {
      this.errorFlag = true;
      return;
    }
    this.router.navigate(['./new'], {relativeTo: this.activatedRoute});
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    // console.log('user' + this.user);
    this.blogs = this.blogService.findAllBlog()
      .subscribe(
        (blogs) => {
          this.blogs = blogs;
          console.log(this.blogs);
        }
      );
  }

}
