import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-weare',
  templateUrl: './who-weare.component.html',
  styleUrls: ['./who-weare.component.css']
})
export class WhoWeareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  whoweare = 'assets/img/whoweare.jpg'

}
