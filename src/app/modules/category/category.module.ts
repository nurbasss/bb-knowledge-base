import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { UserModalComponent } from './components/user-modal/user-modal.component';

const routes: Routes = [
  {
    path: 'create/:type',
    component: CreateCategoryComponent,
  },
];

@NgModule({
  declarations: [CreateCategoryComponent, UserModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class CategoryModule {}
