import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, HeaderSearchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
