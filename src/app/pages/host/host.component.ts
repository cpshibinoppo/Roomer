import { Component, OnInit } from '@angular/core';
import { From1Component } from 'src/app/layout/hostform/from1/from1.component';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  constructor(public from1com:From1Component) { }

  ngOnInit(): void {
    if(this.from1com.nextbutton){
      console.log('sc');
    }
  }

}
