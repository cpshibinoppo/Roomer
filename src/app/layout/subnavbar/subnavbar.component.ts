import { Component,ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import filterdata from './filterdetails.json';
import { SwiperComponent } from "swiper/angular";

import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

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
  ngOnInit(): void {}
  swiperConfig: any = {
    slidesPerView: 'auto',
    navigation: true,
    spaceBetween: 20,
    // loop: true,
    slidesPerGroup:10,
}

}
