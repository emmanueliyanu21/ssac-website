import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounting-service',
  templateUrl: './accounting-service.component.html',
  styleUrls: ['./accounting-service.component.css']
})
export class AccountingServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/accountant.jpg'
  
}
