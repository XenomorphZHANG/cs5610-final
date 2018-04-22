import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class YelpSearchService {

  baseUrl = environment.baseUrl;
  // secret = '';
  // queryBase = 'https://api.yelp.com/v3/businesses/search?term=TERM&latitude=LATITUDE&longitude=LONGITUDE';

  constructor(private http: Http) {}

  searchRst(latitude: String, longitude: String, searchTerm: String) {
    // const url = this.queryBase
    //   .replace('LATITUDE', latitude)
    //   .replace('LONGITUDE', longitude)
    //   .replace('TERM', searchTerm);
    //
    // console.log(url);
    //
    // const headers = new Headers();
    // // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + this.key);
    //
    // const options = new RequestOptions({ headers: headers });
    // return this.http.get(url, options);

    const queryUrl = this.baseUrl + '/api/rst/yelp/search?latitude=' + latitude + '&longitude=' + longitude + '&term=' + searchTerm;
    console.log(queryUrl);
    return this.http.get(queryUrl)
      .map((res: Response) => {
        return res.json();
      });
  }
}
