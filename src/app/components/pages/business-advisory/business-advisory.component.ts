import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-advisory',
  templateUrl: './business-advisory.component.html',
  styleUrls: ['./business-advisory.component.css']
})
export class BusinessAdvisoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/business-advisory.jpg'
}
