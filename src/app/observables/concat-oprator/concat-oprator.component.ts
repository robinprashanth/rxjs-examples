import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat-oprator',
  templateUrl: './concat-oprator.component.html',
  styleUrls: ['./concat-oprator.component.scss']
})
export class ConcatOpratorComponent implements OnInit {

  allVideos = [];

  constructor() { }

  ngOnInit(): void {
    const src1 = interval(1000).pipe(
      map(v => `channel1 video ${v+1}`),
      take(2)
    );
    const src2 = interval(1000).pipe(
      map(v => `channel2 video ${v+1}`),
      take(3)
    );
    const src3 = interval(1000).pipe(
      map(v => `channel3 video ${v+1}`),
      take(4)
    );

    const finalVideos = concat(src1, src2, src3);

    finalVideos.subscribe(res => {
      this.allVideos.push(res)
    });
  }

}
