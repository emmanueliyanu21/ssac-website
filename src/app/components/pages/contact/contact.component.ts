import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//images are declared here
leadership = 'assets/img/leadership.jpg';
mission = 'assets/img/mission.jpg'
  contact = 'assets/img/contact.jpg';

}
