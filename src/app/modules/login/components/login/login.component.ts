import { LoginService } from '@core/services/login.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/internal/operators/first';
import { ToastrService } from 'ngx-toastr';
import {
  errorMessage,
  validateFormFields,
  warningMessage,
} from '@app/core/helper';

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
    private toastr: ToastrService,
    private changeDetector: ChangeDetectorRef
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
      if (this.isRegister) {
        this.register;
      } else {
        this.login();
      }
    }
  }

  onRegisterToggle() {
    this.isRegister = !this.isRegister;
    this.form.reset();
    if (this.isRegister) {
      this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      });
    } else {
      this.form = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      });
    }
    this.changeDetector.detectChanges();
  }

  register() {
    if (this.form.valid) {
      this.loginService.register({
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value,
        name: this.form.controls['username'].value,
      });
    } else {
      if (this.form?.get('email').hasError('email')) {
        warningMessage('Некорректная почта', this.toastr);
        document.getElementById('email').focus();
      }
      validateFormFields(this.form, this.toastr);
    }
  }
}
