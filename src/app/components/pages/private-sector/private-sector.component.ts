import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-sector',
  templateUrl: './private-sector.component.html',
  styleUrls: ['./private-sector.component.css']
})
export class PrivateSectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//images are declared here
leadership = 'assets/img/leadership.jpg';
mission = 'assets/img/private-public.jpg'
}
