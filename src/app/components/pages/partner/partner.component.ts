import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //images are declared here
  leadership = 'assets/img/partner.jpg';
  image2  = 'assets/img/image2.png';
  image3  = 'assets/img/image3.png';
  image4 = 'assets/img/image4.png';
  image5 = 'assets/img/image5.png';
  image6 = 'assets/img/image6.png';

}
