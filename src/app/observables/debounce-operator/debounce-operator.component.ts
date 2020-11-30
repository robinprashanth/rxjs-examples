import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.scss']
})
export class DebounceOperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('debounceInput') public debounceInput: ElementRef;
  @ViewChild('debounceInput2') public debounceInput2: ElementRef;
  public data: string
  public data2: string

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Ex 01
    const search = fromEvent<any>(this.debounceInput.nativeElement, 'keyup');

    search.pipe(
      map(event => event.target.value),
      debounceTime(1000)
    ).subscribe(res => {
      console.log(res);
      this.data = res;
    });

    // Ex 02
    const search2 = fromEvent<any>(this.debounceInput2.nativeElement, 'keyup');

    search2.pipe(
      map(event => event.target.value),
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    });
  }

}
