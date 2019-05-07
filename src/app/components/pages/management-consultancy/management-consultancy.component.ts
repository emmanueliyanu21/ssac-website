import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-consultancy',
  templateUrl: './management-consultancy.component.html',
  styleUrls: ['./management-consultancy.component.css']
})
export class ManagementConsultancyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/management-consultancy.jpg'
}
