import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  isShowLeftBar(): boolean {
    let url = this.router.url;
    if (url.includes('login') || url.includes('categories/create')) {
      return false;
    }
    return true;
  }
}
