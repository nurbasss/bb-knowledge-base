import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { LoginService } from '@core/services/login.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends SubscriptionAccumulator implements OnInit {
  public isLoggedIn: boolean = false;

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
  }

  navigateTo(type: string) {
    switch (type) {
      case 'category':
        this.router.navigate(['/categories/create/category']);
        break;
      case 'subcategory':
        this.router.navigate(['/categories/create/subcategory']);
        break;
      case 'home':
        this.router.navigate(['/home']);
        break;
      default:
        break;
    }
  }
}
