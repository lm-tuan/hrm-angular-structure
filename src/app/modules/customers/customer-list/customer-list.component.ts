import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Full name', 'Birthday', 'Gender', 'Mã nhân viên', 'Phone', 'Email', 'Bộ phận', 'Skill', 'Detail'];
  dataSource;
  isLoading = false;
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.isLoading = true;
    setTimeout(() => {
      this.userService.getAll().subscribe(data => {
        console.log(data);
        this.dataSource = data;
        this.isLoading = false;
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
        this.getAll();
        this.isLoading = false;
      });
    },
    2000);
  }
}
