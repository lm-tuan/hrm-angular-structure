import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.addSkill('', 1, 0);

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
