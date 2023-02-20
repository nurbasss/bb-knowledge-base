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
  public showDropdown: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.subscribeSearch();
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      if (this.results.length === 1) {
        this.navigateTo(this.results[0]?.route);
      } else {
        this.navigateTo('home/search');
      }
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  subscribeSearch() {
    this.searchString.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((val: string) => {
        this.showDropdown = true;
      });
  }
}
