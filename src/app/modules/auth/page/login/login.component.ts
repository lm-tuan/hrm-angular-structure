import { Component, OnInit } from '@angular/core';
import { TutorialService } from './../../../../core/service/tutorialService';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    // this.tutorialService.getAll().subscribe( data => console.log(data));
  }

  onLogin() {
  }

}

