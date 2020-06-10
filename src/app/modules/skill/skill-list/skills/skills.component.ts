import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'detail'];
  dataSource: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  goToFormSkill(id){
    console.log(id);
    this.router.navigate(['skills/detail/', id]);
  }
}
