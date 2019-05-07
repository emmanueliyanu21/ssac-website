import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-service',
  templateUrl: './financial-service.component.html',
  styleUrls: ['./financial-service.component.css']
})
export class FinancialServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//images are declared here
leadership = 'assets/img/leadership.jpg';
mission = 'assets/img/financial-service.jpg'
}
