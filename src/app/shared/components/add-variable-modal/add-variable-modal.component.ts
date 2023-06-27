import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { errorMessage, successMessage } from '@app/core/helper';
import { validateFormFields } from '@app/core/helper';
import { CategoryService } from '@app/core/services/category.service';
import { HelperService } from '@app/core/services/helper.service';
import { VariableService } from '@app/core/services/variable.service';
import { Category, Subcategory } from '@app/data/models/category';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bb-add-variable-modal',
  templateUrl: './add-variable-modal.component.html',
  styleUrls: ['./add-variable-modal.component.scss'],
})
export class AddVariableModalComponent implements OnInit, AfterViewInit {
  @Input() type: string = 'create';
  @Input() editVariable: any;
  public subcategories: Subcategory[] = [];
  public form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public categoryService: CategoryService,
    private changeDetector: ChangeDetectorRef,
    private variableService: VariableService,
    private toastr: ToastrService,
    private helperService: HelperService
  ) {}

  ngAfterViewInit(): void {
    if (this.type === 'edit') {
      this.form.controls['name'].setValue(this.editVariable.name);
      this.form.controls['varValue'].setValue(this.editVariable.value);
      this.form.controls['category'].setValue(
        this.categoryService.getCategoryById(this.editVariable?.category_id)
      );
      this.onCategoryChange(this.form.controls['category'].value);
      this.form.controls['subcategory'].setValue(
        this.categoryService.getLocalSubcategoryById(
          this.editVariable?.sub_category_id
        )
      );
      this.changeDetector.detectChanges();
    }
  }

  close() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      varValue: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null, Validators.required],
    });

    // this.form.controls['category'].valueChanges.subscribe((val: Category) => {
    //   this.subcategories = val.sub_categories;
    //   this.changeDetector.detectChanges();
    // });
  }

  createVariable() {
    if (this.form.valid) {
      const body: any = {
        name: this.form.controls['name'].value,
        value: this.form.controls['varValue'].value,
        category_id: this.form.controls['category']?.value?.id,
        sub_category_id: this.form.controls['subcategory']?.value?.id,
      };
      if (this.type === 'edit' && this.editVariable) {
        body._method = 'PUT';
        this.variableService
          .editVariable(body, this.editVariable.id)
          .subscribe({
            next: (data: any) => {
              this.variableService.getAllVariables();
              this.close();
              successMessage('Переменная успешно изменена', this.toastr);
            },
            error: (error: any) => {
              errorMessage(error, this.toastr);
            },
          });
      } else {
        this.variableService.createVariable(body).subscribe({
          next: (data: any) => {
            this.variableService.getAllVariables();
            this.activeModal.close(data?.vars);
            successMessage('Новая переменная успешно создана', this.toastr);
          },
          error: error => {
            errorMessage(error, this.toastr);
          },
        });
      }
    } else {
      validateFormFields(this.form, this.toastr);
    }
  }

  onCategoryChange(selectedCategory: Category) {
    this.subcategories = [];
    this.form.controls['subcategory'].setValue(null);
    if (selectedCategory) {
      this.subcategories = selectedCategory.sub_categories;
    }
    this.changeDetector.detectChanges();
  }
}
