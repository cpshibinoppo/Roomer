import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// import { Aos } from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
      Aos.init();
    }
  title = 'Airbnb';
}
