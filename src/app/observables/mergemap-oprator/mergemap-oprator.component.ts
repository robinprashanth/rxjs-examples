import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mergemap-oprator',
  templateUrl: './mergemap-oprator.component.html',
  styleUrls: ['./mergemap-oprator.component.scss']
})
export class MergemapOpratorComponent implements OnInit {

  mapdata = [];
  mapdata2 = [];
  mergeMapdata = [];

  constructor() { }

  ngOnInit(): void {
    const src = from(['Tech', 'Action', 'Comdey']);
    
    // Ex 01 | Map
    // We have subscribed 2 times when we use map.

    src.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res => res.subscribe(res2 => {
      this.mapdata.push(res2);
    }));

    // Ex 02 | Map + mergeAll

    src.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res => {
      this.mapdata2.push(res);
    });

    // Ex 03 | Mergemap

    src.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res => {
      this.mergeMapdata.push(res);
    });
  }

  getData(data: string) {
    return of(`${data} video uploaded`) ;
  }

}
