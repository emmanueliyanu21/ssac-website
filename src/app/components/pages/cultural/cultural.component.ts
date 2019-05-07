import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  cultural = 'assets/img/cultural.jpg';

  excellence = 'assets/img/excellence.png';
  service = 'assets/img/customer.png';
  integrity = 'assets/img/intersection.png';
  teamwork = 'assets/img/networking.png';
  respect = 'assets/img/respect.png';
  equity = 'assets/img/hammer.png';
}
