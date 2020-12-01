import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1List = [
    'Angular',
    'react'
  ];
  user2List = [];
  user3List = [];

  //user Subs
  subscribeUser2Status: boolean = false;
  subscribeUser3Status: boolean = false;

  //Subscription
  subs1: Subscription;
  subs2: Subscription;

  constructor(private _utilityService: UtilityService) { }

  ngOnInit(): void {
    this._utilityService.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List = [...this.user1List, res];
    });
  }

  addVideo(video) {
    
    this._utilityService.videoEmit.next(video.value);
  }

  subscribeUser2() {
    if(this.subscribeUser2Status) {
      this.subs1.unsubscribe();
      this.user2List= [];
    } else {
      this.subs1 = this._utilityService.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }
    this.subscribeUser2Status = !this.subscribeUser2Status;
  }

  subscribeUser3() {
    if(this.subscribeUser3Status) {
      this.subs2.unsubscribe();
      this.user3List = [];
    } else {
      this.subs2 = this._utilityService.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    }
    
    this.subscribeUser3Status = !this.subscribeUser3Status;

  }

}
