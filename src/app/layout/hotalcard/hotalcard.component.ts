import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation,Pagination } from "swiper";

SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-hotalcard',
  templateUrl: './hotalcard.component.html',
  styleUrls: ['./hotalcard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotalcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @ViewChild(SwiperComponent) swiper: SwiperComponent | undefined;
  // @ViewChild(SwiperDirective) swiperDirectiveRef: SwiperDirective;


  // swipePrev() {
  //   this.swiper!.swiperRef.slidePrev();
  // }
  // swipeNext() {
  //   this.swiper!.swiperRef.slideNext();
  // }
}
