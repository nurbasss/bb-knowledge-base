import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bb-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() rightText: string = '';
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
