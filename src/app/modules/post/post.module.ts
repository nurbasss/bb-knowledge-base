import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { PostVersionsComponent } from './components/post-versions/post-versions.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

const routes: Routes = [
  {
    path: 'post/:id',
    component: PostComponent,
  },
  {
    path: 'post-version/:id',
    component: PostComponent,
  },
];

@NgModule({
  declarations: [PostComponent, PostVersionsComponent, ImageUploadComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PostModule {}
