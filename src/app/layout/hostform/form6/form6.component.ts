import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';
@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.scss']
})
export class Form6Component implements OnInit {

  constructor(private sharedService: FormService) { }

  ngOnInit(): void {
    $('.boxmandiv button').click(function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
    })
  }
  buttonactive() {
    this.sharedService.sendClickEvent();
  }
}
