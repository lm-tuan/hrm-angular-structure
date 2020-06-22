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

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['position', 'username', 'password', 'role', 'action'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  addForm: FormGroup;
  addSkillForm: FormGroup;
  isEdit = false;
  status = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(data => {
      console.log(data)
      this.dataSource = data;
      this.dataSource = new MatTableDataSource<any>(this.dataSource);
      this.dataSource.paginator = this.paginator;
    }
    );
  }
  private buildForm(): void {
    this.addForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
      role: new FormControl('', []),

    });
  }
  add() {
    // Data form profile
    const { username, password, role } = this.addForm.value;
    const profile = {
      username,
      password,
      role,
    };
    // this.isLoading = true;
  }

 hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  }

  onChange(event) {
  }
  onLinkEdit(id){
    console.log(id);
    this.status =  false;
    this.isEdit = true;
  }
  onDelete(id){

  }
  onSave(id){
    this.status =  true;
    this.isEdit = false;
  }
  onClose(id){
    this.status =  true;
    this.isEdit = false;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];