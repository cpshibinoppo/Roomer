import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
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
  encapsulation: ViewEncapsulation.None
})
export class SubnavbarComponent implements OnInit {
  filterData: filterData[] = filterdata;
  constructor(public homecom: HomeComponent) { }
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
    slidesPerGroup: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        slidesPerGroup: 11,
        spaceBetween: 41,
      },
    },
  };
  showfliter() {
    this.homecom.showfilterpopupfun();
  }
}
