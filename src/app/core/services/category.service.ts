import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@app/data/models/category';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import {
  GET_CATEGORIES,
  GET_SUBCATEGORY_BY_ID,
  POST_CREATE_CATEGORY,
  POST_CREATE_SUBCATEGORY,
} from '../constants/apiUrls';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryList$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(
    []
  );
  isCategoryListLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  categoryListObserver$ = this.categoryList$.asObservable();

  constructor(private http: HttpClient) {}

  getCategoryList() {
    this.isCategoryListLoading$.next(true);
    return this.http.get<any>(environment.baseUrl + GET_CATEGORIES).subscribe({
      next: (data: any) => {
        this.isCategoryListLoading$.next(false);
        this.categoryList$.next(data?.categories);
      },
      error: (data: any) => {
        this.isCategoryListLoading$.next(false);
      },
    });
  }

  createCategory(body: any) {
    return this.http.post(environment.baseUrl + POST_CREATE_CATEGORY, body);
  }

  createSubcategory(body: any) {
    return this.http.post(environment.baseUrl + POST_CREATE_SUBCATEGORY, body);
  }

  editCategory(body: any, id: any) {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_CATEGORY}/${id}`,
      body
    );
  }

  editSubcategory(body: any, id: any) {
    return this.http.post(
      `${environment.baseUrl + POST_CREATE_SUBCATEGORY}/${id}`,
      body
    );
  }

  getSubcategoryById(id: any) {
    return this.http.get(
      `${environment.baseUrl + GET_SUBCATEGORY_BY_ID}/${id}`
    );
  }

  getCategoryNameById(id: any) {
    if (this.categoryList$.value.length && id) {
      return this.categoryList$.value.find((category: any) => {
        category.id === id;
      })?.title;
    }
    return null;
  }

  getSubcatecoryNameById(id: any) {
    if (this.categoryList$.value.length && id) {
      const list = this.categoryList$.value;
      for (let i = 0; i < list.length; i++) {
        const name = list[i]?.sub_categories.find(sub => sub.id === id)?.title;
        if (name) {
          return name;
        }
      }
    }
    return null;
  }

  getCategoryBySubcateryId(id: any) {
    return this.categoryList$.value.find(category =>
      category.sub_categories.some(sub => sub.id === id)
    );
  }

  getLocalSubcategoryById(id: any) {
    if (this.categoryList$.value.length && id) {
      const list = this.categoryList$.value;
      for (let i = 0; i < list.length; i++) {
        const res = list[i]?.sub_categories.find(sub => sub.id === id);
        if (res) {
          return res;
        }
      }
    }
    return null;
  }

  getCategoryById(id: any) {
    return this.categoryList$.value.find(category => category.id === id);
  }

  deleteCategoryById(id: any) {
    return this.http.post(`${environment.baseUrl + POST_CREATE_CATEGORY}/${id}`, {_method: 'DELETE'})
  }

  deleteSubcategoryById(id: any) {
    return this.http.post(`${environment.baseUrl + POST_CREATE_SUBCATEGORY}/${id}`, {_method: 'DELETE'})
  }
}
