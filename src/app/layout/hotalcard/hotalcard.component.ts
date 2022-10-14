import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import $ from 'jquery';
import { SwiperComponent } from 'swiper/angular';



@Component({
  selector: 'app-hotalcard',
  templateUrl: './hotalcard.component.html',
  styleUrls: ['./hotalcard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HotalcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(SwiperComponent) swiper: SwiperComponent | undefined;


  swipePrev() {
    this.swiper!.swiperRef.slidePrev();
  }
  swipeNext() {
    this.swiper!.swiperRef.slideNext();
  }
}
