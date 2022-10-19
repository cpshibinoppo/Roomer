import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-hotaldetail',
  templateUrl: './hotaldetail.component.html',
  styleUrls: ['./hotaldetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HotaldetailComponent implements OnInit {
  @ViewChild(NavbarComponent) navbar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
