import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bb-post-versions',
  templateUrl: './post-versions.component.html',
  styleUrls: ['./post-versions.component.scss'],
})
export class PostVersionsComponent {
  @Input() postHistoryList: any[];
  @Input() activePost: any;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  navigateVersion(id: any) {
    this.router.navigate(['/posts/post-version/' + id]);
    this.close();
  }
}
