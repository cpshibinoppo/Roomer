import { Component, OnInit } from '@angular/core';
import { HotaldetailComponent } from 'src/app/pages/hotaldetail/hotaldetail.component';

@Component({
  selector: 'app-showmoreimg',
  templateUrl: './showmoreimg.component.html',
  styleUrls: ['./showmoreimg.component.scss']
})
export class ShowmoreimgComponent implements OnInit {

  constructor(public hotelcom: HotaldetailComponent) { }

  ngOnInit(): void {
  }
  backfun() {
    this.hotelcom.backfun();
  }

}
