import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  public arrSubs: Subscription;
  public arrSubs2: Subscription;
  public arrSubs3: Subscription;
  public numArray = [];
  public loadingNumbers = true;
  public numArrayMsg = "Converting stream of numbers to array";
  public users = [
    {name: 'Liam', skill: 'fighting'},
    {name: 'John', skill: 'javascript'},
    {name: 'Jacob', skill: 'Angular'},
    {name: 'Mariam', skill: 'fighting'},];

    public nameArray = [];
    public nameArrayMsg = "Converted users to array";
    public namesArray = [];
    public namesArrayMsg = "Converted name strings to array";


  constructor() { }

  ngOnInit(): void {

    // Ex - 01
    const source = interval(1000);
    this.arrSubs = source.pipe(
      take(4),
      toArray()).subscribe(res => {
      console.log(res);
      this.numArray = [...res];
      this.numArrayMsg = "Converted stream of numbers to array";
      this.loadingNumbers = false;
    });

    // Ex - 02
    const source2 = from(this.users);
    this.arrSubs2 = source2.pipe(
      toArray()).subscribe(res => {
      console.log(res);
      this.nameArray = [...res];
      this.nameArrayMsg = "Converted stream to array";
      this.loadingNumbers = false;
    });
    // Ex - 03
    const source3 = of('liam', 'james');
    this.arrSubs3 = source3.pipe(
      toArray()).subscribe(res => {
      console.log(res);
      this.namesArray = [...res];
      this.namesArrayMsg = "Converted names to array";
      this.loadingNumbers = false;
    });
  }

}
