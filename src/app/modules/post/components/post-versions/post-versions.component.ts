import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { errorMessage } from '@app/core/helper';
import { HelperService } from '@app/core/services/helper.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bb-post-versions',
  templateUrl: './post-versions.component.html',
  styleUrls: ['./post-versions.component.scss'],
})
export class PostVersionsComponent {
  @Input() postHistoryList: any[];
  @Input() activePost: any;
  @Input() users: any;

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private helperService: HelperService,
    private changeDetector: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  close() {
    this.activeModal.close();
  }

  navigateVersion(id: any) {
    this.router.navigate(['/posts/post-version/' + id]);
    this.close();
  }

  getUserName(id: any) {
    if (this.users.length) {
      return this.users.find(us => us.id === id)?.name;
    }
    return '';
  }
}
