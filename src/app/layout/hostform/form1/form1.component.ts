import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  constructor(private sharedService: FormService) { }

  ngOnInit(): void {
    $('.formonecardmaindiv button').click(function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    })
  }
  buttonactive() {
    this.sharedService.sendClickEvent();
  }
}
