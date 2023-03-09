import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
    LeftBarComponent,
    SearchBarComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
  ],
  exports: [HeaderComponent, LeftBarComponent, SearchBarComponent],
})
export class SharedModule {}
