import { Component, OnInit } from '@angular/core';
import {  NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  fotos:any[] = [
    {
      name: 'juan',
      img: 'assets/img/img1.jpeg',
      desc: 'juanes el lindo'
    },
    {
      name: 'juan 12',
      img: 'assets/img/img2.jpeg',
      desc: 'juanes el lindo x2'
    },
    {
      name: 'juan 12',
      img: 'assets/img/img3.jpg',
      desc: 'juanes el lindo x2'
    },
    {
      name: 'juan 12',
      img: 'assets/img/img4.jpg',
      desc: 'juanes el lindo x2'
    },
    {
      name: 'juan 12',
      img: 'assets/img/img5.jpg',
      desc: 'juanes el lindo x2'
    },
    {
      name: 'juan 12',
      img: 'assets/img/img6.jpg',
      desc: 'juanes el lindo x2'
    }
  ];

  constructor(private _config: NgbCarouselConfig) { 

    _config.interval = 3000;
    _config.pauseOnHover = false;
    // _config.showNavigationIndicators = false;
    _config.showNavigationArrows = false;

  }

  ngOnInit(): void {
  }

}
