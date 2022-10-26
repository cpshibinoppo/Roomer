import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hostindroducion',
  templateUrl: './hostindroducion.component.html',
  styleUrls: ['./hostindroducion.component.scss']
})
export class HostindroducionComponent implements OnInit {
  playicon = true;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    this.playicon = true;
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) {
      myVideo.play();
      this.playicon = false;
      console.log(myVideo);

    }
    else if (myVideo.play) {
      myVideo.pause();
      this.playicon = true;
    }
  }
}
