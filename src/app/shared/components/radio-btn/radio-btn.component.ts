import { Component, Input } from '@angular/core';

@Component({
  selector: 'bb-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss'],
})
export class RadioBtnComponent {
  @Input() checked: boolean = false;
}
