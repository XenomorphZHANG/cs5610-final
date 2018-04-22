import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {Faq} from '../../../models/faq.model.client';

@Component({
  selector: 'app-faq-new',
  templateUrl: './faq-new.component.html',
  styleUrls: ['./faq-new.component.css']
})
export class FaqNewComponent implements OnInit {

  constructor(
    @Inject('FaqService') private faqService,
    @Inject('SharedService') private sharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: User;
  faqs: Faq[];
  question: String;

  createFaq() {
    const newFaq = new Faq(undefined, this.question, this.user._id);
    this.faqService.createFaq(this.user._id, newFaq)
      .subscribe(
        () => (this.router.navigate(['../'], {relativeTo: this.activatedRoute}))
      );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.faqs = this.faqService.findAllFaqs()
      .subscribe(
        (faqs: Faq[]) => {
          this.faqs = faqs;
        }
      );
  }
}
