import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() isDelete: boolean = false;
  @Output() delete = new EventEmitter();
  @Output() navigate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onNavigate() {
    this.navigate.emit(true);
  }

  onDelete() {
    this.delete.emit(true);
  }
}
