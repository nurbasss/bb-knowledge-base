import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public routeList: any[] = [];
  @Input() type: string;
  @Input() categoryName: string;
  @Input() subCategoryName: string;
  @Input() postName: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.generateBreadcrumbs();
  }

  generateBreadcrumbs() {
    switch (this.type) {
      case 'categories':
        this.routeList = [{ label: '' }];
        break;

      default:
        break;
    }
  }
}
