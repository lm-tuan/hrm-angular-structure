import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    //   this.router.navigate(['customers-test']);
    // }
  }

  login() {
    // this.authService.login(this.loginForm.value)
    //   .subscribe(data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.router.navigate(['customers-test']);
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    //   );
  }

  get f() {
    return this.loginForm.controls;
  }

  private buildForm(): void {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

}
