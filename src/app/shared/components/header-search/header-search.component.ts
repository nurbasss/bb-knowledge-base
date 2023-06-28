import { HelperService } from './../../../core/services/helper.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'bb-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent implements OnInit {
  public searchString = new FormControl();
  public results: any[] = [];

  constructor(private router: Router, public helperService: HelperService) {}
  ngOnInit(): void {
    this.subscribeSearch();
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.helperService.searchString.next(this.searchString.value);
      this.navigateTo('home/search');
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  subscribeSearch() {
    this.searchString.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((val: string) => {
        this.helperService.showSearchDropdown.next(true);
      });
  }
}
