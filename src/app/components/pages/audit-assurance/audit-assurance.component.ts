import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-assurance',
  templateUrl: './audit-assurance.component.html',
  styleUrls: ['./audit-assurance.component.css']
})
export class AuditAssuranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/audit.jpg'
}
