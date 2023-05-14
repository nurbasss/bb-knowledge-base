import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bb-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Input() message: string = '';
  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close(true);
  }
}
