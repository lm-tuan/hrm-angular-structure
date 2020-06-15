import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { AuthService } from 'src/app/core/service/authService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    // private location: Location

  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    // Check on brower have token
    if (sessionStorage.getItem('auth-token') && this.isLoggedIn) {
      this.router.navigate(['employee']);
    }else {
      this.isLoggedIn = false;
      this.isLoginFailed = true;
      this.router.navigate(['auth/login']);
    }
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['employee']);
      },
      err => {
        console.log('err', err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      );
  }

  get f() {
    return this.loginForm.controls;
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

}
