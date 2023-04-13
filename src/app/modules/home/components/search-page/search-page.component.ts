import { HelperService } from './../../../../core/services/helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.helperService.showSearchDropdown.next(false);
  }
}
