import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { UserService } from 'src/app/core/service/user.service';
import { promise } from 'protractor';
import { SkillService } from 'src/app/core/service/skillService';
import { zip } from 'rxjs';
@Component({
  selector: 'app-add-form-customer',
  templateUrl: './add-form-customer.component.html',
  styleUrls: ['./add-form-customer.component.scss']
})
export class AddFormCustomerComponent implements OnInit {
  addForm: FormGroup;
  addSkillForm: FormGroup;
  user: any;
  skill: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private skillService: SkillService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.createForm();
    this.addSkill('', 1, 0);
  }
  private buildForm(): void {
    this.addForm = this.formBuilder.group({
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
    console.log('submit2', this.addSkillForm.value, );
    console.log('submit3', this.addForm.value,  );
    // Data form profile
    const { fullName, address, idCard, email, phone, birthday, gender, position } = this.addForm.value;
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

    // Data form skill
    const skillName = this.addSkillForm.value.skills[0].skill;
    const skill = {
      skill: skillName
    };
    zip(
      this.userService.create(profile),
      this.skillService.create(skill)
    ).subscribe(data => {
      console.log('data', data);
      if (data) {
        this.router.navigate(['customers']);
      }
  }, erorr => {
    console.log('err', erorr);
  });

  }

  get skillForms() {
    return this.addSkillForm.get('skills') as FormArray;

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
    this.addSkillForm = this.formBuilder.group({
      skills: this.formBuilder.array([])
    });
  }

}

