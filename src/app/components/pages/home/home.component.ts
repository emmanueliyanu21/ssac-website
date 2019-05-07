import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

  // images here
  leadership = 'assets/img/leadership.jpg';
  image1 = 'assets/img/image1.png';
  oilandgas = 'assets/img/oil-gas.jpg';
  growth = 'assets/img/growth.jpg';
  entrepreneur = 'assets/img/entrepreneur.jpg';
  coperation = 'assets/img/coperation.jpg';
  valuetax = 'assets/img/value-tac.jpg';
  about = 'assets/img/about.jpg';
  image2  = 'assets/img/image2.png';
  finance  = 'assets/img/financial.png';
  creative  = 'assets/img/creative.png';
  contract  = 'assets/img/contract.png';
  loan  = 'assets/img/loan.png';
  innovation  = 'assets/img/innovation.png';
  computer  = 'assets/img/computer.png';
  valve  = 'assets/img/valve.png';
  oilfunnel  = 'assets/img/oil-funnel.png';
  smesupport  = 'assets/img/customer1.png';
  
  
}
