import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    // console.log(this.loginForm);
  }

  login() {
    console.log('dfdfd', this.loginForm.value);
  }

  get f() {
    return this.loginForm.controls;
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
