import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SkillService } from 'src/app/core/service/skillService';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Full name', 'Birthday', 'Gender', 'Mã nhân viên', 'Phone', 'Email', 'Bộ phận', 'Skill', 'Detail'];
  dataSource;
  isLoading = false;
  searchForm: FormGroup;
  skills;
  constructor(
    private router: Router,
    private userService: UserService,
    private skillService: SkillService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.skillService.getAll().subscribe(skills => {
      console.log(skills);
      this.skills = skills;
    });
    this.buildForm();
    this.getAll();
  }

  getAll(){
    this.isLoading = true;
    setTimeout(() => {
      this.userService.getAll().subscribe(data => {
        console.log(data);
        this.dataSource = data;
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
        this.getAll();
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
    console.log('searchUser', searchUser);
    setTimeout(() => {
      this.userService.getSearch(searchUser).subscribe(data => {
        this.isLoading = false;
        this.dataSource = data;
      });
    }, 2000);
  }
}
