import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  GET_POST_BY_ID,
  GET_POST_VERSION_BY_ID,
  POST_CREATE_POST,
  POST_IMAGE_UPLOAD,
  POST_REVERT_POST_VERSION,
} from '../constants/apiUrls';

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

  getPostVersionById(id: any): Observable<any> {
    return this.http.get(
      `${environment.baseUrl + GET_POST_VERSION_BY_ID}/${id}`
    );
  }

  revertPostVersion(body: any) {
    return this.http.post(
      `${environment.baseUrl + POST_REVERT_POST_VERSION}`,
      body
    );
  }

  public uploadImage(file: File) {
    let formParams = new FormData();
    formParams.append('image', file);
    return this.http.post(
      `${environment.baseUrl + POST_IMAGE_UPLOAD}`,
      formParams
    );
  }
}
