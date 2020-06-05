import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-add-form-customer',
  templateUrl: './add-form-customer.component.html',
  styleUrls: ['./add-form-customer.component.scss']
})
export class AddFormCustomerComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      idCard: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      startDate: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required]
    });
  }
  add() {

    const { fullName, address, idCard, email, phone, birthday, gender, position } = this.loginForm.value;
    const profile = {
      fullName,
      address,
      idCard,
      email,
      phone,
      gender,
      position,
      birthday: moment(birthday).format('YYYY-MM-DD')
    };
    this.isLoading = true;
    setTimeout(() => {
      this.userService.create(profile).subscribe(() => {
        this.router.navigate(['customers']);
      });
    } , 2000);
  }
}
