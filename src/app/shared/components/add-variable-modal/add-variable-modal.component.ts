import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bb-add-variable-modal',
  templateUrl: './add-variable-modal.component.html',
  styleUrls: ['./add-variable-modal.component.scss'],
})
export class AddVariableModalComponent implements OnInit {
  public categories: any[] = [
    {
      name: 'Категория 1',
    },
    {
      name: 'Категория 2',
    },
    {
      name: 'Категория 3',
    },
    {
      name: 'Категория 4',
    },
  ];

  public subcategories: any[] = [
    {
      name: 'Подкатегория 1',
    },
    {
      name: 'Подкатегория 2',
    },
    {
      name: 'Подкатегория 3',
    },
    {
      name: 'Подкатегория 4',
    },
  ];
  public form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  close() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      varValue: [null],
      category: [null],
      subcategory: [null],
    });
  }

  createVariable() {}
}
