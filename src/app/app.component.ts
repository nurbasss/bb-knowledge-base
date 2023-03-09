import { HelperService } from './core/services/helper.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bb-web';
  showLeftBar: boolean = false;
  constructor(public helperService: HelperService) {}
}
