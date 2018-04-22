import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Faq} from '../../../models/faq.model.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {

  constructor(
    @Inject('FaqService') private faqService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  fid: String;
  faq: Faq;
  user: User;

  content: String;

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.fid = params['fid'];
        this.faqService.findFaqById(this.fid)
          .subscribe((faq: Faq) => {
            this.faq = faq;
            console.log('faq ' + faq);
          });
      }
    );
  }


  addFollowUp() {
    this.faqService.addFollowUp(this.fid, this.content)
      .subscribe(
        (faq: any) => {
          // faq.followups.push(followup);
          this.faq = faq;
          console.log(this.faq);
          this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
      );
  }
}
