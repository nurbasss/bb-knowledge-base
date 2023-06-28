import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { warningMessage } from '@app/core/helper';
import { SubscriptionAccumulator } from '@app/core/helper/SubscriptionAccumulator';
import { LoginService } from '@app/core/services/login.service';
import { User } from '@app/data/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bb-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent
  extends SubscriptionAccumulator
  implements OnInit, OnDestroy
{
  @HostBinding('class.active') isMenuOpen: boolean = false;
  user: User;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService,
    private changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscriber(
      this.loginService.currentUser$.subscribe((data: User) => {
        this.user = data;
        this.changeDetector.detectChanges();
      })
    );
  }

  @HostListener('click', ['$event']) click(e) {
    e.stopPropagation();
  }
  @HostListener('document:click') resetToggle() {
    this.isMenuOpen = false;
  }

  toggle(e) {
    e.stopPropagation();
    console.log('toggle');
    this.isMenuOpen = !this.isMenuOpen;
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
