import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/portfolio.jpg';
  image1 = 'assets/img/image1.png';
  port1 = 'assets/img/port-1.jpg';
  port2 = 'assets/img/port-2.jpg';

}
