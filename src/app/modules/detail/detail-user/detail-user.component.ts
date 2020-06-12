import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  isDelete = false;
  isLoading = false;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    const data = this.route.snapshot;
    this.userService.get(data.params.id).subscribe(user => {
      console.log('data', user);
      this.user = user;
    }, err => {
      if (err) {
        console.log('err', err);
        if (err.status === 404) {
          this.router.navigate(['employee']);
        }
      }
      console.log('err', err);

    });
  }

  redirectToEdit(id) {
    this.router.navigate([`employee/edit/${id}`]);
  }

  redirectToHome() {
    this.router.navigate(['employee']);
  }
  removeUser(id) {
    this.isLoading = true;
    setTimeout(() => {
      this.userService.delete(id).subscribe((data: any) => {
        if(data.status === 200) {
          this.isLoading = false;
          this.router.navigate(['employee']);
        }
      });
    }, 2000);
  }


}
