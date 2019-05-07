import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sme',
  templateUrl: './sme.component.html',
  styleUrls: ['./sme.component.css']
})
export class SmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/sme-support.jpg'
}
