import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { zip } from 'rxjs';
import { DepartmentService } from 'src/app/core/service/departmentService';
import { UserService } from 'src/app/core/service/user.service';
import { SkillService } from 'src/app/core/service/skillService';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Full name', 'Mã nhân viên', 'Phone', 'Bộ phận', 'Skill', 'Detail', 'select'];
  isLoading = false;
  searchForm: FormGroup;
  skills;
  departments;
  selection = new SelectionModel<any>(true, []);
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
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
        this.skills = data[0];
        this.dataSource = data[1];
        this.dataSource = new MatTableDataSource<any>(this.dataSource);
        this.dataSource.paginator = this.paginator;
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
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected?.length;
    const numRows = this.dataSource?.length;
    return numSelected === numRows;
  }
   /** Selects all rows if they are not all selected; otherwise clear selection. */
   masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }
}
