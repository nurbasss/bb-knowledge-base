import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

const routes: Routes = [
  {
    path: 'post/:id',
    component: PostComponent,
  },
];

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PostModule {}
