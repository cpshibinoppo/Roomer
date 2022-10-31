import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { FormService } from 'src/app/shared/form.service';
@Component({
  selector: 'app-from1',
  templateUrl: './from1.component.html',
  styleUrls: ['./from1.component.scss']
})
export class From1Component implements OnInit {

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
