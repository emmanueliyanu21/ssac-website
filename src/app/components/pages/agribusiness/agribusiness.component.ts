import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agribusiness',
  templateUrl: './agribusiness.component.html',
  styleUrls: ['./agribusiness.component.css']
})
export class AgribusinessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/agribusiness.jpg'

}
