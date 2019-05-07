import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-compliance',
  templateUrl: './tax-compliance.component.html',
  styleUrls: ['./tax-compliance.component.css']
})
export class TaxComplianceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/tax-compliance.jpg'
}
