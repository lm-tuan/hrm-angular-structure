import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import * as moment from 'moment';
import { SkillService } from 'src/app/core/service/skillService';
import { LevelSkillService } from 'src/app/core/service/LevelSkillService';
import { ProfileSkillService } from 'src/app/core/service/ProfileSkillService';
import { zip } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id: number;
  editForm: FormGroup;
  editSkillForm: FormGroup;
  user: any;
  skill: any;
  skills: any;
  testgender = [1, 0];
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
    this.fetchDataById();
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
        startDate: [user.start_date, Validators.required],
        birthday: [user.birthday, Validators.required],
        gender: [Number(user.gender), Validators.required],
        position: [user.postion, Validators.required]
      });
    });
  }
  edit() {
    const { fullName, address, startDate, idCard, email, phone, birthday, gender, position } = this.editForm.value;
    const skillName = this.editSkillForm.value.skills[0].skill;
    const levelid = this.editSkillForm.value.skills[0].level;
    const id = this.route.snapshot.params.id;
    const profile = {
      fullName,
      address,
      idCard,
      email,
      phone,
      gender: Number(gender),
      position,
      birthday: moment(birthday).format('YYYY-MM-DD'),
      start_date: moment(startDate).format('YYYY-MM-DD')
    };
    const skill = {
      name: skillName
    };

    this.userService.update(id, profile).subscribe((data: any) => {
      console.log('data', data);
         // profileSkill not data
      if(data.profileSkill.length === 0) {
        // insert skill
        this.skillService.create(skill).subscribe((s: any) => {
          const ps = {
            level_id: levelid,
            profile_id: data.profile_id,
            skill_id: s.skill_id
          };
          this.profileSkillService.create(ps).subscribe(p => {
            this.router.navigate(['employee']);
          });

        });

      }else {
        // update skill
        // update profileSkill
        this.skillService.update(data.profileSkill[0].skill.skill_id, skill).subscribe(ups => {
          this.router.navigate(['employee']);
        })
      }
    });
  }


  fetchDataById() {
    const id = this.route.snapshot.params.id;
    this.userService.get(id).subscribe((data: any) => {
      this.skill = data;
      if (data.profileSkill.length === 0) {
        this.addSkill('', 1, 0);
      } else {
        // this.skills = data.profileSkill.length;
        data.profileSkill.forEach(item => {
          this.addSkill(item.skill.name, item.level.name, 0);
        });
      }
    })
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

}
