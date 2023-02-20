import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { LoginService } from '@core/services/login.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends SubscriptionAccumulator implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService,
    private changeDetector: ChangeDetectorRef
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
}
