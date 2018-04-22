import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Faq} from '../models/faq.model.client';

@Injectable()
export class FaqService {
  constructor(
    private http: Http,
    private router: Router,
    @Inject('SharedService') private sharedService
  ) {}

  baseURL = environment.baseUrl;

  findAllFaqs() {
    const url = this.baseURL + '/api/faq';
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
    });
  }

  createFaq(userId: String, faq: Faq) {
    const url = this.baseURL + '/api/user/' + userId + '/faq';
    console.log('this is client');
    return this.http.post(url, faq)
      .map((response: Response) => {
        return response.json();
      });
  }

  findFaqById(faqId: String) {
    return this.http.get(this.baseURL + '/api/faq/' + faqId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateFaq(faqId: String, faq: Faq) {
    const url =  this.baseURL + '/api/faq/' + faqId;
    return this.http.put(url, faq)
      .map((response: Response) => {
      return response.json();
    });
  }

  deleteFaq(faqId: String) {
    const url = this.baseURL + '/api/faq/' + faqId;
    return this.http.delete(url);
  }

  addFollowUp(faqId: String, content: String) {
    const url =  this.baseURL + '/api/faq/' + faqId;
    return this.http.post(url, {'content': content})
      .map((response: Response) => {
        return response.json();
      });
  }
}
