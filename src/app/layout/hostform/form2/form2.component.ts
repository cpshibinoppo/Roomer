import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

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
