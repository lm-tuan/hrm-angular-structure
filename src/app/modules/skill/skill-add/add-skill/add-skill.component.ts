import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  myForm: FormGroup;
  skills = 0;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
    this.fetchDataById();

  }

  fetchDataById(){
    const id = this.route.snapshot.params.id;
    this.userService.get(id).subscribe((data: any) => {
      console.log(data);
      if(data.profileSkill.length === 0){
        this.addSkill('', 1, 0);
      }else {
        this.skills = data.profileSkill.length;
        data.profileSkill.forEach(item => {
          this.addSkill(item.skill.name, item.level.name, 0);
        });
      }
      
    })
  }

  get skillForms() {
    return this.myForm.get('skills') as FormArray;

  }

  addSkill(skillId = '', levelId = 1, empskillId = 0) {
    const skill = this.fb.group({
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
    this.myForm = this.fb.group({
      skills: this.fb.array([])
    });
  }

  onSubmit() {
    console.log('submit', this.myForm.value);

  }

}
