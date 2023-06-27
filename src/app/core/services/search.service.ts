import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  GET_SEARCH_HISTORY,
  POST_CLEAR_HISTORY,
  POST_SEARCH,
} from '../constants/apiUrls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}
  public searchHistory$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public searchResult$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  searchPost(searchString) {
    return this.http.post(`${environment.baseUrl + POST_SEARCH}`, {
      value: searchString,
    });
  }

  getHistory() {
    return this.http.get(`${environment.baseUrl + GET_SEARCH_HISTORY}`);
  }

  clearHistory() {
    return this.http.post(`${environment.baseUrl + POST_CLEAR_HISTORY}`, {});
  }
}
