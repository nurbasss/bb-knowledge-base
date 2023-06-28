import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  Observable,
  Subject,
  BehaviorSubject,
  shareReplay,
  tap,
  first,
} from 'rxjs';
import { LOGIN, REGISTER } from '../constants/apiUrls';
import { User } from '@app/data/models/user';
import { Router } from '@angular/router';
import { errorMessage } from '../helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authorized = new BehaviorSubject<boolean>(true);
  isAuthorized: Observable<boolean> = this.authorized.asObservable();
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (this.isLoggedIn()) {
      this.currentUser$.next(this.getCurrentUser());
      //this.router.navigate(['home']);
    }
  }

  setAuthorizedStatus(val: boolean): void {
    this.authorized.next(val);
  }

  login(email: any, password: any) {
    return this.http
      .post<any>(environment.baseUrl + LOGIN, {
        email,
        password,
      })
      .subscribe({
        next: this.setSession,
        error: (error: any) => {
          errorMessage(error, this.toastr);
        },
      });
  }

  register(body: any) {
    return this.http.post<any>(environment.baseUrl + REGISTER, body).subscribe({
      next: this.setSession,
      error: (error: any) => {
        errorMessage(error, this.toastr);
      },
    });
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    this.currentUser$.next(undefined as any);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('accessToken');
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser')!) as User;
  }

  private setSession = (authResult: any) => {
    sessionStorage.setItem('accessToken', authResult.authorisation.token);
    localStorage.setItem('currentUser', JSON.stringify(authResult?.user));
    this.currentUser$.next(authResult?.user as User);
    this.router.navigate(['/home']);
  };

  getAccessToken() {
    return sessionStorage.getItem('accessToken');
  }
}
