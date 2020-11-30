import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit, OnDestroy {

  public sub1: Subscription;

  public namesArray = ['Liam',
  'Noah',
  'Oliver',
  'William',
  'Elijah'];
  public namesStream = [];

  constructor() { }

  ngOnInit(): void {

    const src = interval(2000);
    // Ex 01
    this.sub1 = src.pipe(
      tap(res => {
        if(res === 4) {
          this.sub1.unsubscribe();
        }
      }),
      map(res => this.namesArray[res]),
    
    )
    .subscribe(res => {
      this.namesStream.push(res);
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

}
