import { LoginService } from '@core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/internal/operators/first';
import { ToastrService } from 'ngx-toastr';
import { validateFormFields } from '@app/core/helper';

@Component({
  selector: 'bb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isRegister: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.form.valid) {
      this.loginService.login(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      );
    } else {
      validateFormFields(this.form, this.toastr);
    }
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.login();
    }
  }
}
