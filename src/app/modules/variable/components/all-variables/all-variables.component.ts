import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { errorMessage, successMessage } from '@app/core/helper';
import { VariableService } from '@app/core/services/variable.service';
import { Variable } from '@app/data/models/variable';
import { AddVariableModalComponent } from '@app/shared/components/add-variable-modal/add-variable-modal.component';
import { ConfirmationModalComponent } from '@app/shared/components/confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'bb-all-variables',
  templateUrl: './all-variables.component.html',
  styleUrls: ['./all-variables.component.scss'],
})
export class AllVariablesComponent implements OnInit {
  public searchString = new FormControl();
  // public variablesList: any[] = [
  //   {
  //     category: 'Депозит',
  //     subcategory: 'Депозит Физ. лиц',
  //     name: 'Остаток KZT',
  //     value: '1000',
  //   },
  //   {
  //     category: 'Переводы',
  //     subcategory: 'Переводы Физ. лиц',
  //     name: 'Лимит для переводов',
  //     value: '100000000',
  //   },
  //   {
  //     category: 'Депозит',
  //     subcategory: 'Депозит Физ. лиц',
  //     name: 'Остаток USD',
  //     value: '5',
  //   },
  //   {
  //     category: 'Кредит',
  //     subcategory: 'Кредит Физ. лиц',
  //     name: 'Процентная ставка',
  //     value: '14,1%',
  //   },
  //   {
  //     category: 'Карта',
  //     subcategory: 'Карты Физ. лиц',
  //     name: 'Лимит на количество',
  //     value: '6',
  //   },
  // ];
  public variablesList: Variable[] = [];

  constructor(
    public variableService: VariableService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.variableService.getAllVariables();
    this.variableService.variablesList$.subscribe(
      (data: Variable[]) => (this.variablesList = [...data])
    );
  }

  createVariable() {
    const modalRef = this.modalService.open(AddVariableModalComponent, {
      modalDialogClass: 'mw-740 mh-600',
      centered: true,
    });
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

  deleteVariable(variable: any) {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.message = `Вы действительно хотите удалить переменную "${variable.name}"?`;
    modalRef.result.then(result => {
      if (result) {
        this.variableService.deleteVariable(variable.id).subscribe({
          next: (data: any) => {
            successMessage('Переменная успешно удалена', this.toastr);
            this.variableService.getAllVariables();
          },
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      }
    });
  }

  editVariable(variable: any) {
    const modalRef = this.modalService.open(AddVariableModalComponent, {
      modalDialogClass: 'mw-740 mh-600',
      centered: true,
    });
    modalRef.componentInstance.type = 'edit';
    modalRef.componentInstance.editVariable = variable;
  }
}
