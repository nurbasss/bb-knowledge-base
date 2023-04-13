import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public showSearchDropdown = new BehaviorSubject<boolean>(false);
  isShowSearchDropdown: Observable<boolean> =
    this.showSearchDropdown.asObservable();
  public searchString = new BehaviorSubject<string>('');

  constructor(private router: Router) {}

  isShowLeftBar(): boolean {
    let url = this.router.url;
    if (
      url.includes('login') ||
      url.includes('categories/create') ||
      url.includes('home/search') ||
      url.includes('article/create')
    ) {
      return false;
    }
    return true;
  }
}
