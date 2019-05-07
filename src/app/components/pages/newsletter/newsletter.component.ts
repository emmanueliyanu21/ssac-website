import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//images are declared here
leadership = 'assets/img/leadership.jpg';
mission = 'assets/img/newsletter.jpg'
}
