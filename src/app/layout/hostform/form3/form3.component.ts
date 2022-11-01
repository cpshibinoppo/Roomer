import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

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
