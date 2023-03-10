import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { generateRandomColor } from '@app/core/helper';

@Component({
  selector: 'bb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchString: FormControl;
  searchResults: any[] = [
    {
      title: 'Результат 1',
      text: 'ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст',
    },
    {
      title: 'Результат 1',
      text: 'ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст',
    },
    {
      title: 'Результат 1',
      text: 'ТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекстТекст',
    },
  ];
  public isFocused: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.searchString = new FormControl();
  }

  ngOnInit(): void {}

  cleanInput() {
    this.searchString.setValue('');
    this.changeDetector.detectChanges();
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
}
