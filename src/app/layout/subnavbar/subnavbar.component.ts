import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import filterdata from './filterdetails.json';
import { SwiperComponent } from "swiper/angular";
// import SwiperCore, { Navigation } from "swiper";
// import Swiper from 'swiper';
import SwiperCore, { Navigation, Swiper, Virtual,Pagination } from 'swiper';

SwiperCore.use([Navigation,Pagination]);

interface filterData {
  name: String;
  img: String;
}

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubnavbarComponent implements OnInit {
  filterData: filterData[] = filterdata;
  constructor() {}
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper!.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper!.swiperRef.slidePrev(100);
  }
  ngOnInit(): void {}
  swiperConfig: any = {
    slidesPerView: 20,
    navigation: true,
    spaceBetween: 20,
    slidesPerGroup:10,
}

}
