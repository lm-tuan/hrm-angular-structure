import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
    console.log('submit', this.editSkillForm.value);
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


  fetchDataById(){
    const id = this.route.snapshot.params.id;
    this.userService.get(id).subscribe((data: any) => {
      console.log(data);
      this.skill = data;
      if(data.profileSkill.length === 0){
        this.addSkill('', 1, 0);
      }else {
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

  onSubmit() {
    console.log('submit', this.editSkillForm.value);

  }
}
