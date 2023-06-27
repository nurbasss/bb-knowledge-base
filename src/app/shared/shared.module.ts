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
import { VariableModalComponent } from './components/variable-modal/variable-modal.component';
import { RadioBtnComponent } from './components/radio-btn/radio-btn.component';
import { AddVariableModalComponent } from './components/add-variable-modal/add-variable-modal.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { VariableComponent } from './components/variable/variable.component';
import { BinderComponent } from './components/binder/binder.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { LastUpdatedListComponent } from './components/last-updated-list/last-updated-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent,
    LeftBarComponent,
    SearchBarComponent,
    SearchResultComponent,
    VariableModalComponent,
    RadioBtnComponent,
    AddVariableModalComponent,
    NotificationComponent,
    LoaderComponent,
    BreadcrumbsComponent,
    VariableComponent,
    BinderComponent,
    ConfirmationModalComponent,
    LastUpdatedListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
  ],
  exports: [
    HeaderComponent,
    LeftBarComponent,
    SearchBarComponent,
    LoaderComponent,
    VariableComponent,
    BinderComponent,
    LastUpdatedListComponent,
  ],
})
export class SharedModule {}
