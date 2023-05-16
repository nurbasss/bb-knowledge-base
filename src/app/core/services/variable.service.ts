import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  GET_VARIABLES,
  GET_VARS_BY_IDS,
  POST_CREATE_VARIABLE,
} from '../constants/apiUrls';
import { Variable } from '@app/data/models/variable';

@Injectable({
  providedIn: 'root',
})
export class VariableService {
  variablesList$: BehaviorSubject<Variable[]> = new BehaviorSubject<Variable[]>(
    []
  );
  isVariableListLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getAllVariables() {
    this.isVariableListLoading$.next(true);
    this.http.get(`${environment.baseUrl + GET_VARIABLES}`).subscribe({
      next: (data: any) => {
        this.isVariableListLoading$.next(false);
        this.variablesList$.next(data?.vars);
      },
      error: (data: any) => {
        this.isVariableListLoading$.next(false);
      },
    });
  }

  createVariable(body: any) {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_VARIABLE}`,
      body
    );
  }

  getVariablesByIds(body: any) {
    return this.http.post(`${environment.baseUrl + GET_VARS_BY_IDS}`, body);
  }

  deleteVariable(id: any) {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_VARIABLE}/${id}`,
      { _method: 'DELETE' }
    );
  }

  editVariable(body: any, id: any) {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_VARIABLE}/${id}`,
      body
    );
  }
}
