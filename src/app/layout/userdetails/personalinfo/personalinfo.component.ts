import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backfunction() {
    history.back();
  }
  nameedit() {
    console.log('edit name');

    $(".nameinput").css("display", "block");
  }
}
