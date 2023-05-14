import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VariableService } from '@app/core/services/variable.service';
import { Variable } from '@app/data/models/variable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'bb-variable-modal',
  templateUrl: './variable-modal.component.html',
  styleUrls: ['./variable-modal.component.scss'],
})
export class VariableModalComponent implements OnInit {
  public variablesList: Variable[] = [];
  public searchString = new FormControl();
  public selectedVariable: any;

  constructor(
    public activeModal: NgbActiveModal,
    public variableService: VariableService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.variableService.variablesList$.subscribe((data: Variable[]) => {
      this.variablesList = data;
      this.changeDetector.detectChanges();
    });
  }

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
