import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['No', 'Full name', 'Birthday', 'Gender', 'Mã nhân viên', 'Phone', 'Email', 'Bộ phận'];
  dataSource;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      console.log('data', data);
      this.dataSource = data;
    });
  }

}
