import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil-gas',
  templateUrl: './oil-gas.component.html',
  styleUrls: ['./oil-gas.component.css']
})
export class OilGasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  //images are declared here
  leadership = 'assets/img/leadership.jpg';
  mission = 'assets/img/oil-industry.jpg';
}
