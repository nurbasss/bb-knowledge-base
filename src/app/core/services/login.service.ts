import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authorized = new BehaviorSubject<boolean>(false);
  isAuthorized: Observable<boolean> = this.authorized.asObservable();

  constructor() {}

  setAuthorizedStatus(val: boolean): void {
    this.authorized.next(val);
  }
}
