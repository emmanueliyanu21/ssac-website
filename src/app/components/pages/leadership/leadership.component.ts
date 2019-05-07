import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ceo = 'assets/img/ceo1.jpg';
  leadership = 'assets/img/leadership.jpg';

}
