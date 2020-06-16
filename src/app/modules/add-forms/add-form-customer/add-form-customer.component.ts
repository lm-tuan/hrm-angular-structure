import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { UserService } from 'src/app/core/service/user.service';
import { promise } from 'protractor';
import { SkillService } from 'src/app/core/service/skillService';
import { zip } from 'rxjs';
import { LevelSkillService } from 'src/app/core/service/LevelSkillService';
import { ProfileSkillService } from 'src/app/core/service/ProfileSkillService';
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
  levels: any;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private skillService: SkillService,
    private levelSkillService: LevelSkillService,
    private profileSkillService: ProfileSkillService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.createForm();
    this.addSkill('', 1, 0);
  }
  private buildForm(): void {
    this.addForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
      idCard: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required])
    });
  }
  add() {
    // Data form profile
    const { fullName, address, startDate, idCard, email, phone, birthday, gender, position } = this.addForm.value;
    const profile = {
      fullName,
      address,
      idCard,
      email,
      phone,
      gender: Number(gender),
      position,
      start_date: moment(startDate).format('YYYY-MM-DD'),
      birthday: moment(birthday).format('YYYY-MM-DD')
    };

    // Data form skill
    const skillName = this.addSkillForm.value.skills[0].skill;
    const levelid = this.addSkillForm.value.skills[0].level;
    this.isLoading = true;
    const skill = {
      name: skillName
    };
    zip(
      this.userService.create(profile),
      this.skillService.create(skill)
    ).subscribe((data: any) => {
      console.log('data', data);
      const ps = {
        level_id: levelid,
        profile_id: data[0].profile_id,
        skill_id: data[1].skill_id
      };
      setTimeout(() => {
        this.profileSkillService.create(ps).subscribe( sp => {
          if (sp) {
            this.isLoading = false;
            this.router.navigate(['employee']);
          }
        });
      }, 2000);
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

 hasError = (controlName: string, errorName: string) =>{
    return this.addForm.controls[controlName].hasError(errorName);
  }

}

