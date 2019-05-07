import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//images are declared here
leadership = 'assets/img/leadership.jpg';
mission = 'assets/img/technology.jpg'
}
