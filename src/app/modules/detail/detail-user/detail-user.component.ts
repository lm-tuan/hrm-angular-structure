import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    const data = this.route.snapshot;
    this.userService.get(data.params.id).subscribe(user => this.user = user);
  }


}
