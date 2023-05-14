import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllVariablesComponent } from './components/all-variables/all-variables.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AllVariablesComponent,
  },
];

@NgModule({
  declarations: [AllVariablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class VariableModule {}
