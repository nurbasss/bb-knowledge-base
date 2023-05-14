import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './modules/post/post.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/category/category.module').then(m => m.CategoryModule),
  },
  {
    path: 'variables',
    loadChildren: () =>
      import('./modules/variable/variable.module').then(m => m.VariableModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/post/post.module').then(m => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
