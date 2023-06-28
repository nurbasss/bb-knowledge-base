import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { warningMessage } from '@app/core/helper';
import { SubscriptionAccumulator } from '@app/core/helper/SubscriptionAccumulator';
import { HelperService } from '@app/core/services/helper.service';
import { LoginService } from '@app/core/services/login.service';
import { User } from '@app/data/models/user';
import { ToastrService } from 'ngx-toastr';
import { skip } from 'rxjs';

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
    private changeDetector: ChangeDetectorRef,
    private helperService: HelperService
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
    this.addSubscriber(
      this.router.events.pipe(skip(1)).subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.resetToggle();
        }
      })
    );

    this.addSubscriber(
      this.helperService.searchString.pipe(skip(1)).subscribe(_ => {
        this.resetToggle();
      })
    );
  }

  @HostListener('click', ['$event']) click(e) {
    e.stopPropagation();
  }
  @HostListener('document:click') resetToggle() {
    this.isMenuOpen = false;
  }

  menuItemClickHandler(e) {
    e.stopPropagation();
    this.toggle(e);
  }

  toggle(e) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(type: string) {
    this.resetToggle();
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
    this.resetToggle();
    warningMessage('Пока что не готово', this.toastr);
  }

  logout() {
    this.resetToggle();
    this.loginService.logout();
  }
}
