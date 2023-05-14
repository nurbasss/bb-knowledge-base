import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { GET_POST_BY_ID, POST_CREATE_POST } from '../constants/apiUrls';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(body: any): Observable<any> {
    return this.http.post(environment.baseUrl + POST_CREATE_POST, body);
  }

  getPostById(id: any): Observable<any> {
    return this.http.get(`${environment.baseUrl + GET_POST_BY_ID}/${id}`);
  }

  updatePost(body: any, id: any): Observable<any> {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_POST}/${id}`,
      body
    );
  }
}
