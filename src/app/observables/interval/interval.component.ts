import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg: string;
  obsMsg2: string;
  videosArray: string[] = [];
  videoSubscription: Subscription;
  videosArray2: string[] = [];
  videoSubscription2: Subscription;

  constructor() { }

  ngOnInit(): void {

    const broadcastVideos = interval(1000);
    const broadcastVideosTimer = timer(5000, 1000);

    this.videoSubscription = broadcastVideos.subscribe(res => {
      this.videosArray.push(`Video ${res}`);
      if(res >= 5) {
        this.videoSubscription.unsubscribe();
        this.obsMsg = "📢 Thats all folks. Wait for next release";
      }
    });

    this.videoSubscription2 = broadcastVideosTimer.subscribe(res => {
      this.videosArray2.push(`Video ${res}`);
      if(res >= 9) {
        this.videoSubscription2.unsubscribe();
        this.obsMsg2 = `📢 Thats all folks. I was able to release only ${res} videos within this time. Wait for next release`;
      }
    });
  
  }

}
