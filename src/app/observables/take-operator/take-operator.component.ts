import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {

  public randNames = ['Liam',
  'Noah',
  'Oliver',
  'William',
  'Elijah',
   'Samson',
  'Mariam'];

  takeExpArray = [];
  takeLastExpArray = [];
  takeUntilExpArray = [];

  constructor() { }

  ngOnInit(): void {

    const nameSrc = from(this.randNames);
    // Ex - 01 | Take
    // const src = interval(1000).pipe(
    //   take(5)
    // );
    nameSrc
    .pipe(take(3))
    .subscribe(res => {
      this.takeExpArray = [...this.takeExpArray, res];
    });

    // Ex - 02 | TakeLast
    nameSrc
    .pipe(takeLast(3))
    .subscribe(res => {
      this.takeLastExpArray = [...this.takeLastExpArray, res];
    });


    // Ex - 03 | TakeUntil
    let cond1 = timer(5000);
    let cond2 = fromEvent(document, 'click'); // stops streaming numbers on click event.
    const src = interval(1000).pipe(
      map(res => `Number ${res}`),
      takeUntil(cond1)
    )
    .subscribe(res => {
      this.takeUntilExpArray = [...this.takeUntilExpArray, res];
    })
  }

}
