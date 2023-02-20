import { LoginService } from './../../../../core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.setAuthorizedStatus(true);
  }
}
