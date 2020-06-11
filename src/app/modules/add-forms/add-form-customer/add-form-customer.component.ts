import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-add-form-customer',
  templateUrl: './add-form-customer.component.html',
  styleUrls: ['./add-form-customer.component.scss']
})
export class AddFormCustomerComponent implements OnInit {
  // id: number;
  // editForm: FormGroup;
  // editSkillForm: FormGroup;
  // user: any;
  // skill: any;
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private router: Router,
  //   private userService: UserService,
  // ) {
  //   this.buildForm();
  // }

  // ngOnInit(): void {
  // }

  // private buildForm(): void {
  //   this.loginForm = this.formBuilder.group({
  //     fullName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
  //     address: ['', Validators.required],
  //     idCard: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     phone: ['', Validators.required],
  //     startDate: ['', Validators.required],
  //     birthday: ['', Validators.required],
  //     gender: ['', Validators.required],
  //     position: ['', Validators.required]
  //   });
  // }
  // public hasError = (controlName: string, errorName: string) =>{
  //   return this.loginForm.controls[controlName].hasError(errorName);
  // }
  // add() {

  //   const { fullName, address, idCard, email, phone, birthday, gender, position } = this.loginForm.value;
  //   const profile = {
  //     fullName,
  //     address,
  //     idCard,
  //     email,
  //     phone,
  //     gender,
  //     position,
  //     birthday: moment(birthday).format('YYYY-MM-DD')
  //   };
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.userService.create(profile).subscribe(() => {
  //       this.router.navigate(['customers']);
  //     });
  //   } , 2000);
  // }
  id: number;
  editForm: FormGroup;
  editSkillForm: FormGroup;
  user: any;
  skill: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.createForm();
    this.fetchDataById();
  }
  private buildForm(): void {
    this.editForm = this.formBuilder.group({
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
  edit() {
    console.log('submit2', this.editSkillForm.value, );
    console.log('submit3', this.editForm.value,  );
    // const { fullName, address, idCard, email, phone, birthday, gender, position } = this.editForm.value;
    // const profile = {
    //   fullName,
    //   // address,
    //   idCard,
    //   email,
    //   phone,
    //   gender: Number(gender),
    //   position,
    //   birthday: moment(birthday).format('YYYY-MM-DD')
    // };
    // const id = this.route.snapshot.params.id;
    // console.log('profile', profile);

    // this.userService.update(id, profile).subscribe(data => {
    //   if (data) {

    //     setTimeout(() => {
    //       this.router.navigate(['customers/detail/', id]);
    //     }, 1000);
    //   }
    // });
  }


  fetchDataById() {
    this.addSkill('', 1, 0);
    // const id = this.route.snapshot.params.id;
    // this.userService.get(id).subscribe((data: any) => {
    //   this.skill = data;
    //   if (data.profileSkill.length === 0) {
    //     this.addSkill('', 1, 0);
    //   } else {
    //     // this.skills = data.profileSkill.length;
    //     data.profileSkill.forEach(item => {
    //       this.addSkill(item.skill.name, item.level.name, 0);
    //     });
    //   }
    // })
  }

  get skillForms() {
    return this.editSkillForm.get('skills') as FormArray;

  }

  addSkill(skillId = '', levelId = 1, empskillId = 0) {
    const skill = this.formBuilder.group({
      skill: [skillId],
      level: [levelId],
      empskill: [empskillId]
    });

    this.skillForms.push(skill);
  }

  deleteSkill(i) {
    this.skillForms.removeAt(i);
  }

  createForm() {
    this.editSkillForm = this.formBuilder.group({
      skills: this.formBuilder.array([])
    });
  }

  onSubmit() {
    // console.log('submit1', this.editSkillForm.value);

  }
}

