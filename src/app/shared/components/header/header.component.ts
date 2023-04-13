import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { LoginService } from '@core/services/login.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends SubscriptionAccumulator implements OnInit {
  public isLoggedIn: boolean = false;
  public showSearch: boolean = false;

  constructor(
    private loginService: LoginService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscriber(
      this.loginService.isAuthorized.subscribe(data => {
        this.isLoggedIn = data;
        this.changeDetector.detectChanges();
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
}
