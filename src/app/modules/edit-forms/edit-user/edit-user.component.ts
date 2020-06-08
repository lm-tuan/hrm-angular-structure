import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id: number;
  editForm: FormGroup;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm(): void {
    const id = this.route.snapshot.params.id;
    this.userService.get(id).subscribe((user: any) => {
      this.user = user;
      this.editForm = this.formBuilder.group({
        fullName: [user.fullName, Validators.required],
        address: [user.address, Validators.required],
        idCard: [user.idCard, Validators.required],
        email: [user.email, Validators.required],
        phone: [user.phone, Validators.required],
        startDate: [user.startDate, Validators.required],
        birthday: [user.birthday, Validators.required],
        gender: [user.gender, Validators.required],
        position: [user.postion, Validators.required]
      });
    });
  }
  edit() {
    const { fullName, address, idCard, email, phone, birthday, gender, position } = this.editForm.value;
    const profile = {
      fullName,
      // address,
      idCard,
      email,
      phone,
      gender: Number(gender),
      position,
      birthday: moment(birthday).format('YYYY-MM-DD')
    };
    const id = this.route.snapshot.params.id;
    console.log('profile', profile);

    this.userService.update(id, profile).subscribe(data => {
      if (data) {
        setTimeout(() => {
          this.router.navigate(['customers/detail/', id]);
        }, 1000);
       }
    });
  }
}
