import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { SkillService } from 'src/app/core/service/skillService';
import { LevelSkillService } from 'src/app/core/service/LevelSkillService';
import { ProfileSkillService } from 'src/app/core/service/ProfileSkillService';
import { zip } from 'rxjs';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/core/service/employeeService';
import { RoleService } from 'src/app/core/service/roleService';
import * as _ from 'lodash';
import { AuthService } from 'src/app/core/service/authService';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['position', 'username', 'password', 'role', 'action'];
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  addForm: FormGroup;
  editForm: FormGroup;
  rolesFormGroup: FormGroup;
  isEdit = false;
  status = true;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  roles;
  // test
  interestFormGroup: FormGroup;
  interests: any;
  selected: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private roleService: RoleService,
    private authService: AuthService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    zip(
      this.employeeService.getAll(),
      this.roleService.getAll()
    ).subscribe(data => {
      console.log(data);
      this.dataSource = data[0];
      this.roles = data[1];
      this.interests = data[1];
      this.dataSource = new MatTableDataSource<any>(this.dataSource);
      this.dataSource.paginator = this.paginator;
    });


    // test
    this.interestFormGroup = this.formBuilder.group({
      interests: this.formBuilder.array([])
    });

  }
  private buildForm(): void {
    this.addForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
      role: new FormControl('', []),
    });
  }
  add() {
    // Data form profile
    const { username, email, password } = this.addForm.value;
    const roles = this.interestFormGroup.value.interests;
    console.log(roles);
    const user = {
      username,
      email,
      password,
      role: roles
    };
    this.authService.register(user).subscribe(data => {
        if(data.message){
          console.log("ngon rồi đó");
        }
    }, err => {
      console.log(err);
      
    })
   
  }
  hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  }

  onLinkEdit(id) {
    console.log(id);
    this.status = false;
    this.isEdit = true;
  }
  onDelete(id) {

  }
  onSave(id) {
    this.status = true;
    this.isEdit = false;
  }
  onClose(id) {
    this.status = true;
    this.isEdit = false;
  }
  edit() {
    console.log('fdfd', this.editForm.value);
  }

  // On 
  onChange(event) {
    const roles = <FormArray>this.interestFormGroup.get('interests') as FormArray;
    
    if (event.checked) {
      roles.push(new FormControl(event.source.value))
    } else {
      const i = roles.controls.findIndex(x => x.value === event.source.value);
      roles.removeAt(i);
    }
    console.log(this.interestFormGroup.value);
    
  }
}


