import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import filterdata from './filterdetails.json';
import { SwiperComponent } from 'swiper/angular';
import $ from 'jquery';

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
  ngOnInit(): void {
    $(document).ready(function () {
      $('.btn').click(function () {
        $('.ch').removeClass('ch');
        $('.btn').removeClass('btn-active').addClass('inactive');
        $(this).removeClass('inactive').addClass('btn-active');
      });
    });
  }
  swiperConfig: any = {
    slidesPerView: 'auto',
    navigation: true,
    slidesPerGroup: 20,
  };
}
