import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.scss']
})
export class CustomObsComponent implements OnInit, OnDestroy {

  public techStatus = "";
  public techStatus2 = "";
  public nameStatus = "";
  public technologies = [
    "Angular",
    "React",
    "Vue",
    "Html",
    "Phyton"
  ];
  public randNames = ['Walker',
  'Thompson',
  'Anderson',
  'Johnson',
  'Tremblay',
  'Peltier',
  'Cunningham',
  'Simpson',
  'Mercado',
  'Sellers'];
  public selectedName: string;
  public technologiesEmitted = [];
  public technologiesCustEmitted = [];
  private _subs1: Subscription;
  private _subs2: Subscription;


  constructor() { }

  ngOnInit(): void {

    //Ex 01 Manual
    const obs1 = new Observable((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(this.technologies[0]);
      }, 1000);
      setTimeout(() => {
        observer.next(this.technologies[1]);
      }, 2000);
      setTimeout(() => {
        observer.next(this.technologies[2]);
        observer.error(new Error("Something went wrong"))
        
      }, 3000);
      setTimeout(() => {
        observer.next(this.technologies[3]);
        observer.complete();
        
      }, 2000);
    });

    this._subs1 = obs1.subscribe(res => {
      this.technologiesEmitted.push(res);
    },(err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    });

    //Ex 02 Custom
    const obs2 = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(this.technologies[count]);
        
        if(count >= 2) {
          observer.error("emit error");
        }
        if(count >= 3) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this._subs2 = obs2.subscribe(res => {
      this.technologiesCustEmitted.push(res);
    },(err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    });

    //Ex 03 Custom
    const obs3 = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(this.randNames[count]);
        
        if(count >= 2) {
          // observer.error("emit error");
        }
        if(count >= 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this._subs2 = obs3.subscribe(res => {
      this.selectedName = res;
    },(err) => {
      this.nameStatus = 'error';
    }, () => {
      this.nameStatus = 'completed';
    });


  }

  ngOnDestroy() {
    this._subs1.unsubscribe();
    this._subs2.unsubscribe();
  }

}
