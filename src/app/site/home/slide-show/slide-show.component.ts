import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})

export class SlideShowComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1200/400?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
