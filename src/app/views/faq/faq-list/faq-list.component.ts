import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Faq} from '../../../models/faq.model.client';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {

  constructor(
    @Inject('FaqService') private faqService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  faqs: Faq[];
  errorFlag: boolean;
  errorMsg: String = 'Please login before ask question';

  newFaq() {
    if (this.user._id === undefined) {
      this.errorFlag = true;
      return;
    }
    this.router.navigate(['./new'], {relativeTo: this.activatedRoute});
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.errorFlag = false;
    this.faqs = this.faqService.findAllFaqs()
      .subscribe(
        (faqs: Faq[]) => {
          this.faqs = faqs;
        }
      );
  }

}
