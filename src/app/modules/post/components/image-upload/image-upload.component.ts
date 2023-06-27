import { Component } from '@angular/core';
import { errorMessage, warningMessage } from '@app/core/helper';
import { PostService } from '@app/core/services/post.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bb-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  file: File = null;

  constructor(
    private postService: PostService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {}

  close() {
    this.activeModal.close();
  }

  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      this.postService.uploadImage(this.file).subscribe({
        next: (resp: any) => {
          this.activeModal.close(resp?.images?.url);
        },
        error: (error: any) => {
          errorMessage(error, this.toastr);
        },
      });
    } else {
      warningMessage('Файл не выбран', this.toastr);
    }
  }
}
