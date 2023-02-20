import { LoginService } from '@core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isRegister: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  login() {
    this.loginService.setAuthorizedStatus(true);
    this.router.navigate(['/home']);
  }
}
