import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  public subscribe: Subscription;
  public videos: string;

  constructor() { }

  ngOnInit(): void {

    // Ex -01

    const videosBroadcast = interval(1000);

    this.subscribe = videosBroadcast.pipe(
      map(data => `video ${data}`) 
    ).subscribe(res => {
      this.videos = res;
    });

    setTimeout(() => {
      this.subscribe.unsubscribe();
    }, 20000);

    // Ex 02
  }

}
