import { HelperService } from './../../../core/services/helper.service';
import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  errorMessage,
  formateDate,
  generateRandomColor,
} from '@app/core/helper';
import { Subscription, debounceTime, distinctUntilChanged, first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SearchService } from '@app/core/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent
  extends SubscriptionAccumulator
  implements OnInit, OnDestroy
{
  public searchString: FormControl;
  searchResults: any[] = [];
  allSearchResults: any[] = [];
  public isFocused: boolean = false;
  public searchSubscription: Subscription;
  public isSearchLoading: boolean = false;
  public notFound: boolean = false;

  public isHistoryLoading: boolean = false;
  public historyList: any[] = [];
  public allHistoryList: any[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private helperService: HelperService,
    private searchService: SearchService,
    private toastr: ToastrService,
    private router: Router
  ) {
    super();
    this.searchString = new FormControl();
  }

  get isSearchPage() {
    return this.router.url.includes('/search');
  }

  ngOnInit(): void {
    if (this.isSearchPage) {
      this.addSubscriber(
        this.helperService.searchString
          .pipe(first())
          .subscribe((data: string) => {
            this.searchString.setValue(data);
            console.log(data);

            if (data) {
              this.searchPost(data);
            }
            this.changeDetector.detectChanges();
          })
      );
      this.addSubscriber(
        this.searchService.searchResult$
          .pipe(first())
          .subscribe((data: any) => {
            this.searchResults = data;
            this.changeDetector.detectChanges();
          })
      );
      this.addSubscriber(
        this.searchService.searchHistory$
          .pipe(first())
          .subscribe((data: any) => {
            this.historyList = data;
            this.changeDetector.detectChanges();
          })
      );
    }

    this.addSubscriber(
      this.searchString.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((data: any) => {
          if (data) {
            if (this.searchSubscription) {
              this.searchSubscription.unsubscribe();
            }
            this.searchPost(data);
          } else {
            this.getHistory();
          }
        })
    );
    if (!this.searchString?.value) {
      this.getHistory();
    }
  }

  cleanInput() {
    this.searchString.setValue('');
    this.changeDetector.detectChanges();
    this.addSubscriber(
      this.searchService.clearHistory().subscribe(data => {
        console.log(data);
      })
    );
  }

  onFocus() {
    this.isFocused = true;
    this.changeDetector.detectChanges();
  }

  onBlur() {
    this.isFocused = false;
    this.changeDetector.detectChanges();
  }

  getColor(i: number) {
    return generateRandomColor(i);
  }

  searchPost(search: string) {
    this.isSearchLoading = true;
    this.notFound = false;
    this.changeDetector.detectChanges();
    this.searchSubscription = this.searchService.searchPost(search).subscribe({
      next: (data: any) => {
        this.isSearchLoading = false;
        this.allSearchResults = data?.posts;
        this.searchResults = data?.posts.slice(0, 4);
        if (data?.posts?.length === 0) {
          this.notFound = true;
        }
        this.changeDetector.detectChanges();
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
        this.isSearchLoading = false;
        this.changeDetector.detectChanges();
      },
    });
  }

  getHistory() {
    this.isHistoryLoading = true;
    this.changeDetector.detectChanges();
    this.searchService.getHistory().subscribe((data: any) => {
      this.isHistoryLoading = false;
      this.allHistoryList = data?.search_history.reverse();
      if (this.isSearchPage) {
        this.historyList = [...this.allHistoryList];
      } else {
        this.historyList = this.allHistoryList.slice(0, 4);
      }
      this.changeDetector.detectChanges();
    });
  }

  formatDate(date: string) {
    if (date) {
      return formateDate(date);
    }
    return '';
  }

  showMoreHistory() {
    this.searchService.searchHistory$.next(this.allHistoryList);
    this.router.navigate(['home/search']);
  }

  showMorePost() {
    this.searchService.searchResult$.next(this.allSearchResults);
    this.router.navigate(['home/search']);
  }

  navigatePost(id: any) {
    this.router.navigate(['/posts/post/' + id]);
  }

  onHistoryClicked(search: any) {
    if (this.isSearchPage) {
      this.searchString.setValue(search);
      this.searchPost(search);
    } else {
      this.helperService.searchString.next(search);
      this.router.navigate(['home/search']);
    }
  }

  onHistoryDelete(item: any) {}
}
