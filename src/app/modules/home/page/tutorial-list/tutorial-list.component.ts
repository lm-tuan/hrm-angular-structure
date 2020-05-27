import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/core/service/tutorialService';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {
  constructor( private tutorialService: TutorialService ) { }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  tutorials: any;
  ngOnInit(): void {
    this.tutorialService.getAll().subscribe(data => this.tutorials = data);
  }

}
