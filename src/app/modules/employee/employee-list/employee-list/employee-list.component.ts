import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { zip } from 'rxjs';
import { DepartmentService } from 'src/app/core/service/departmentService';
import { UserService } from 'src/app/core/service/user.service';
import { SkillService } from 'src/app/core/service/skillService';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Full name', 'Mã nhân viên', 'Phone', 'Bộ phận', 'Skill', 'Detail'];
  dataSource;
  isLoading = false;
  searchForm: FormGroup;
  skills;
  departments;
  constructor(
    private router: Router,
    private userService: UserService,
    private skillService: SkillService,
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.fetchData();
  }


   // processing in parallel by use zip observable
  fetchData(){
    this.isLoading = true;
    setTimeout(() => {
      zip(
        this.skillService.getAll(),
        this.userService.getAll(),
        this.departmentService.getAll()
      ).subscribe(data => {
        console.log('data', data);
        this.skills = data[0];
        this.dataSource = data[1];
        this.departments = data[2];
        this.isLoading = false;
      }, err => {
        if (err.status === 401){
          this.router.navigate(['auth/login']);
        }
        console.log('err', err);
      });
    }, 1000);
  }

  onLinkDetail(id){
    this.router.navigate(['employee/detail/', id]);
  }

  onLinkEdit(id){
    this.router.navigate(['employee/edit/', id]);
  }
  onDelete(id){
    this.isLoading = true;
    setTimeout(() => {
      this.userService.delete(id).subscribe(data => {
        console.log('data', data);
        this.isLoading = false;
        this.fetchData();
      });
    },
    2000);
  }

  private buildForm(): void {
    this.searchForm = this.formBuilder.group({
      searchName: new FormControl('', []),
      searchDep: new FormControl('', []),
      searchSkill: new FormControl('', []),
    });
  }
  search(){
    this.isLoading = true;
    const { searchDep, searchName, searchSkill } = this.searchForm.value;
    const searchUser = {
      departmentId: searchDep,
      fullname : searchName,
      skillId: searchSkill
    };
    if(!searchDep && !searchName && !searchSkill  ){
      this.fetchData();
    }else{
      console.log('searchUser', searchUser);
      setTimeout(() => {
        this.userService.getSearch(searchUser).subscribe(data => {
          this.isLoading = false;
          this.dataSource = data;
        });
      }, 2000);
    }
  }
}
