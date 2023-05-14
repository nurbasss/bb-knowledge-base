import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { LoginService } from '@core/services/login.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from '@app/data/models/user';
import { warningMessage } from '@app/core/helper';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '@app/core/services/category.service';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends SubscriptionAccumulator implements OnInit {
  public isLoggedIn: boolean = false;
  public showSearch: boolean = false;
  public user: User;

  constructor(
    public loginService: LoginService,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private toastr: ToastrService,
    private categoryService: CategoryService
  ) {
    super();
  }

  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.addSubscriber(
      this.loginService.currentUser$.subscribe((data: User) => {
        this.user = data;
        this.changeDetector.detectChanges();
        if (this.user) {
          this.categoryService.getCategoryList();
        }
      })
    );
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: any) => {
        const path = event?.url.split('/');
        path.shift();
        if (path[0] === 'home' && (path.length === 1 || path[1] === 'search')) {
          this.showSearch = false;
        } else {
          this.showSearch = true;
        }
        this.changeDetector.detectChanges();
      });
  }

  navigateTo(type: string) {
    switch (type) {
      case 'category':
        this.router.navigate(['/categories/create/category']);
        break;
      case 'subcategory':
        this.router.navigate(['/categories/create/subcategory']);
        break;
      case 'article':
        this.router.navigate(['/categories/article/create']);
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
      default:
        break;
    }
  }

  openToastr() {
    warningMessage('Пока что не готово', this.toastr);
  }

  logout() {
    this.loginService.logout();
  }
}
