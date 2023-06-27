import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { errorMessage, successMessage } from '@app/core/helper';
import { CategoryService } from '@app/core/services/category.service';
import { Category } from '@app/data/models/category';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bb-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  public type: string = 'category';
  public isEdit: boolean = false;
  public form: FormGroup;
  public categories: Category[] = [];
  public editCategory: any;
  public editId: any;
  public prefillCategoryId$ = new BehaviorSubject<any>(null);

  public tags: any[] = [
    { name: 'Тэг 1' },
    { name: 'Тэг 2' },
    { name: 'Тэг 3' },
    { name: 'Тэг 4' },
  ];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public categoryService: CategoryService,
    private toastr: ToastrService,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      users: [null],
      title: [null, Validators.required],
      description: [null],
      tags: [null],
      category: [null],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params?.category) {
        this.prefillCategoryId$.next(params?.category);
      }
    });
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.editId = Number(params['id']);
      const action = this.router.url.split('/')[2].toString();
      this.form.reset();
      if (this.type === 'subcategory') {
        this.categoryService.getCategoryList();
        this.categoryService.categoryList$.subscribe((data: Category[]) => {
          this.categories = data;
          if (this.editId) {
            this.isEdit = true;
            this.edit();
          }
          if (data) {
            this.prefillCategoryId$.subscribe(id => {
              if (id) {
                this.form.controls['category'].setValue(Number(id));
              }
            });
          }

          this.changeDetector.detectChanges();
        });
      } else {
        if (this.editId) {
          this.isEdit = true;
          this.edit();
        }
      }
    });

    // this.route.queryParams.subscribe((params: any) => {
    //   this.prefillCategory = params[category];

    // });
    // this.route.queryParams.subscribe((data: any) => {
    //   if (data) {
    //     this.form.get('category')?.setValue();
    //   }
    // });
  }

  getTitle() {
    if (this.type === 'subcategory') {
      if (this.isEdit) {
        return 'Изменить подкатегорию';
      }
      return 'Создать подкатегорию';
    } else {
      if (this.isEdit) {
        return 'Изменить категорию';
      }
      return 'Создать категорию';
    }
  }

  addNewTag = (term: string) => {
    return { name: term };
  };

  onSubmitForm() {
    const successCb = () => {
      let message =
        this.type === 'subcategory'
          ? this.isEdit
            ? 'Подкатегория успешно изменена'
            : 'Подкатегория успешно создана'
          : this.isEdit
          ? 'Категория успешно изменена'
          : 'Катеогрия успешно создана';
      successMessage(message, this.toastr);
      this.categoryService.getCategoryList();
      this.router.navigate(['/home']);
    };
    if (this.type === 'subcategory') {
      const body: any = {
        title: this.form.controls['title'].value,
        description: this.form.controls['description'].value,
        category_id: this.form.controls['category'].value,
        content: this.form.controls['description'].value,
      };
      if (this.isEdit) {
        body._method = 'PUT';
        this.categoryService.editSubcategory(body, this.editId).subscribe({
          next: successCb,
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      } else {
        this.categoryService.createSubcategory(body).subscribe({
          next: successCb,
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      }
    } else {
      const body: any = {
        title: this.form.controls['title'].value,
        description: this.form.controls['description'].value,
      };
      if (this.isEdit) {
        body._method = 'PUT';
        this.categoryService.editCategory(body, this.editId).subscribe({
          next: successCb,
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      } else {
        this.categoryService.createCategory(body).subscribe({
          next: successCb,
          error: (error: any) => {
            errorMessage(error, this.toastr);
          },
        });
      }
    }
  }

  edit() {
    if (this.type === 'subcategory') {
      this.editCategory = this.categoryService.getLocalSubcategoryById(
        this.editId
      );
    } else {
      this.editCategory = this.categoryService.getCategoryById(this.editId);
    }
    this.form.controls['title'].setValue(this.editCategory?.title);
    this.form.controls['description'].setValue(this.editCategory?.description);
    if (this.type === 'subcategory') {
      this.form.controls['category'].setValue(this.editCategory?.category_id);
    }
    this.changeDetector.detectChanges();
  }
}
