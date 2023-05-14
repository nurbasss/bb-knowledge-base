import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '@app/core/services/category.service';
import { Category } from '@app/data/models/category';

@Component({
  selector: 'bb-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent implements OnInit {
  // categoryList: any[] = [
  //   {
  //     name: 'Карты',
  //     id: 1,
  //     toggle: false,
  //     subCategories: [
  //       { id: 1, name: 'Дебетовые карты' },
  //       { id: 2, name: 'Дебетовые карты' },
  //       { id: 3, name: 'Дебетовые карты' },
  //     ],
  //   },
  //   {
  //     name: 'Карты',
  //     id: 2,
  //     toggle: false,
  //     subCategories: [
  //       { id: 1, name: 'Дебетовые карты' },
  //       { id: 2, name: 'Дебетовые карты' },
  //     ],
  //   },
  //   {
  //     name: 'Карты',
  //     id: 3,
  //     toggle: false,
  //     subCategories: [
  //       { id: 1, name: 'Дебетовые карты' },
  //       { id: 2, name: 'Дебетовые карты' },
  //       { id: 3, name: 'Дебетовые карты' },
  //     ],
  //   },
  // ];
  categoryList: Category[] = [];
  categoryToggleList: boolean[] = [];
  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.categoryService.categoryList$.subscribe(data => {
      if (data.length > 0) {
        this.categoryList = data;
        this.categoryToggleList = new Array(this.categoryList.length).fill(
          false
        );
        this.changeDetector.detectChanges();
      }
    });
  }

  navigateToVariables() {
    this.router.navigate(['/variables']);
  }

  navigateCategory(id: number) {
    this.router.navigate(['/categories/list/category/' + id]);
  }

  navigateSubcategory(id: number) {
    this.router.navigate(['/categories/list/subcategory/' + id]);
  }
}
