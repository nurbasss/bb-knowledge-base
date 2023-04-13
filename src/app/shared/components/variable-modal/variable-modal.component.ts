import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'bb-variable-modal',
  templateUrl: './variable-modal.component.html',
  styleUrls: ['./variable-modal.component.scss'],
})
export class VariableModalComponent {
  public variablesList: any[] = [
    {
      category: 'Депозит',
      subcategory: 'Депозит Физ. лиц',
      name: 'Остаток KZT',
      value: '1000',
    },
    {
      category: 'Переводы',
      subcategory: 'Переводы Физ. лиц',
      name: 'Лимит для переводов',
      value: '100000000',
    },
    {
      category: 'Депозит',
      subcategory: 'Депозит Физ. лиц',
      name: 'Остаток USD',
      value: '5',
    },
    {
      category: 'Кредит',
      subcategory: 'Кредит Физ. лиц',
      name: 'Процентная ставка',
      value: '14,1%',
    },
    {
      category: 'Карта',
      subcategory: 'Карты Физ. лиц',
      name: 'Лимит на количество',
      value: '6',
    },
  ];

  public searchString = new FormControl();
  public selectedVariable: any;

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }

  sendSelected() {
    this.activeModal.close(this.selectedVariable);
  }

  selectVar(item: any) {
    this.selectedVariable = item;
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      // if (this.results.length === 1) {
      //   this.navigateTo(this.results[0]?.route);
      // } else {
      //   this.helperService.searchString.next(this.searchString.value);
      //   this.navigateTo('home/search');
      // }
    }
  }

  subscribeSearch() {
    this.searchString.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((val: string) => {
        //this.helperService.showSearchDropdown.next(true);
      });
  }
}
