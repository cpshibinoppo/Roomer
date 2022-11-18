import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotalcardlist',
  templateUrl: './hotalcardlist.component.html',
  styleUrls: ['./hotalcardlist.component.scss']
})
export class HotalcardlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.likemaindiv button').click(function () {
      $(this).toggleClass('ative')
    });
  }

}
