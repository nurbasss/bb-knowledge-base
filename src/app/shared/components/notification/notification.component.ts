import { Component, Input } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bb-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent extends Toast {
  @Input() notification: any;
  constructor(
    private toastr: ToastrService,
    public override toastPackage: ToastPackage
  ) {
    super(toastr, toastPackage);
  }

  close() {
    this.toastr.clear();
  }
}
