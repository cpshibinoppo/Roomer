import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import filterdata from './filterdetails.json';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

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
    slidesPerGroup: 10,
    spaceBetween: 40,
  };
}
