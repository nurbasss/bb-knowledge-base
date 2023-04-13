import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';

const routes: Routes = [
  {
    path: 'create/:type',
    component: CreateCategoryComponent,
  },
  {
    path: 'article/create',
    component: CreatePostComponent,
  },
];

@NgModule({
  declarations: [
    CreateCategoryComponent,
    UserModalComponent,
    CreatePostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    EditorModule,
  ],
})
export class CategoryModule {}
