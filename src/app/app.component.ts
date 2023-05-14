import { HelperService } from './core/services/helper.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from './core/services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bb-web';
  showLeftBar: boolean = false;
  constructor(
    public helperService: HelperService,
    private categoryService: CategoryService
  ) {}
}
