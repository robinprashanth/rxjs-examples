import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit, OnDestroy {

  obsMsg: string;
  obsMsg2: string;
  fromMsg: string;
  namesArray: string[] = [];
  namesSubscription: Subscription;
  namesArray2: any;
  namesubscription2: Subscription;
  namesubsFromObs: Subscription;
  promSubsFromObs: Subscription;
  subscription2: Subscription;

  fromObsNamesArray: string[] = [];
  fromPromise: string;
  fromStringObs: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
    //OF
    const obs1 = of('Liam',
      'Noah',
      'Oliver',
      'William',
      'Elijah');

    this.namesSubscription = obs1.subscribe(res => {
      this.namesArray.push(`${res}`);
      this.obsMsg = "The names that I have for you";
    });

    const obs2 = of({ a: 'Liam',
      b: 'Noah',
      c: 'Oliver',
      d: 'William',
      e: 'Elijah'})

    this.namesubscription2 = obs2.subscribe(res => {
      this.namesArray2 = res;
      this.obsMsg2 = "The names that I have for you";
    });

    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    this.subscription2 = source.subscribe(val => console.log(val),);

    // From - Array
    const obs3 = from(['Liam',
      'Noah',
      'Oliver',
      'William',
      'Elijah']);

      this.namesubsFromObs = obs3.subscribe(res => {
        this.fromObsNamesArray.push(res);
          this.fromMsg = "Array values will be emitted as a sequence";
      });

      //From - promise
      const promiseSource = from(new Promise(resolve => {
        setTimeout(() => {
          resolve('God answered your prayers');
        }, 3000)
      }));
        
      //output: 'Hello World'
      this.promSubsFromObs = promiseSource.subscribe((val: string) => this.fromPromise = val);
      
      //From - string
      const obs6 = from("Rxjs");
        
      //output: 'Hello World'
      this.promSubsFromObs = obs6.subscribe((val: string) => this.fromStringObs.push(val));
  }

  ngOnDestroy() {
    this.namesSubscription.unsubscribe();
    this.namesubscription2.unsubscribe();
    this.namesubsFromObs.unsubscribe();
    this.promSubsFromObs.unsubscribe();
    this.subscription2.unsubscribe();
  }



}
