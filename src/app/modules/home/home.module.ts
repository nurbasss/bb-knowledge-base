import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, SearchPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
