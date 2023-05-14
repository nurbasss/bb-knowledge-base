import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: 'create/:type',
    component: CreateCategoryComponent,
  },
  {
    path: 'edit/:type/:id',
    component: CreateCategoryComponent,
  },
  {
    path: 'article/:action/:id',
    component: CreatePostComponent,
  },
  {
    path: 'article/:action',
    component: CreatePostComponent,
  },
  {
    path: 'list/:type/:id',
    component: CategoryListComponent,
  },
];

@NgModule({
  declarations: [
    CreateCategoryComponent,
    UserModalComponent,
    CreatePostComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    EditorModule,
    SharedModule,
  ],
})
export class CategoryModule {}
