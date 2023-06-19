import { CategoryService } from '@app/core/services/category.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from '@app/data/models/category';
import { ActivatedRoute, Router } from '@angular/router';
import {
  errorMessage,
  formateDate,
  generateRandomColor,
  successMessage,
} from '@app/core/helper';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '@app/shared/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'bb-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  public category: any;
  public categoryId: number;
  public subscription: Subscription;
  public type: string;
  public isSubcategoryLoading: boolean = false;

  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.subscription) {
        this.subscription.unsubscribe;
        this.category = null;
      }
      this.type = params['type'];
      this.categoryId = params['id'];
      if (this.type === 'category') {
        this.getCategory(this.categoryId);
      } else if (this.type === 'subcategory') {
        this.getSubcategoryById();
      }
    });
  }

  getColor(i: number) {
    return generateRandomColor(i);
  }

  formatDate(date: string) {
    if (date) {
      return formateDate(date);
    }
    return '';
  }

  getCategory(id: number) {
    this.subscription = this.categoryService.categoryList$.subscribe(
      (data: Category[]) => {
        if (data.length) {
          this.category = data.find(
            (_category: Category) => _category.id == id
          );
          this.changeDetector.detectChanges();
        }
      }
    );
  }

  navigateForm(type: string) {
    if (type === 'subcategory') {
      this.router.navigate(['categories/create/subcategory'], {
        queryParams: { category: this.categoryId },
      });
    } else if (type === 'post') {
      this.router.navigate(['categories/article/create'], {
        queryParams: {
          subcategory: this.categoryId,
          category: this.category?.category_id,
        },
      });
    }
  }
  getSubcategoryById() {
    this.isSubcategoryLoading = true;
    this.changeDetector.detectChanges();
    this.categoryService.getSubcategoryById(this.categoryId).subscribe({
      next: (data: any) => {
        this.category = data?.sub_category;
        this.isSubcategoryLoading = false;
        this.changeDetector.detectChanges();
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
        this.isSubcategoryLoading = false;
        this.changeDetector.detectChanges();
      },
    });
  }

  navigatePost(id: any) {
    this.router.navigate(['/posts/post/' + id]);
  }

  navigateBack() {
    if (this.type === 'subcategory') {
      this.router.navigate([
        '/categories/list/category/' + this.category?.category_id,
      ]);
    } else {
      this.router.navigate(['/home']);
    }
  }

  navigateEdit() {
    this.router.navigate([`/categories/edit/${this.type}/${this.categoryId}`]);
  }

  navigateSubcategory(subcategory: any) {
    this.router.navigate(['/categories/list/subcategory/' + subcategory.id]);
  }

  deleteHandler() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });

    const successCb = (data: any) => {
      this.navigateBack();
      successMessage(
        `${this.type === 'subcategory' ? 'Подкатегория' : 'Категория'} "${
          this.category.title
        }" успешно удалена`,
        this.toastr
      );
      this.categoryService.getCategoryList();
    };
    const errCb = (error: any) => {
      errorMessage(error, this.toastr);
    };

    modalRef.componentInstance.message = `Вы действительно хотите удалить ${
      this.type === 'subcategory' ? 'подкатегорию' : 'категорию'
    } "${this.category.title}"?`;
    modalRef.result.then(result => {
      if (result) {
        if (this.type === 'subcategory') {
          this.categoryService
            .deleteSubcategoryById(this.categoryId)
            .subscribe({
              next: successCb,
              error: errCb,
            });
        } else {
          this.categoryService.deleteCategoryById(this.categoryId).subscribe({
            next: successCb,
            error: errCb,
          });
        }
      }
    });
  }
}
