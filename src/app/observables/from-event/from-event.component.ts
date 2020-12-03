import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn',{ read: ElementRef }) addBtn: ElementRef;
  listEvents = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Normally we  register event listeners.
    document.addEventListener('click', () => console.log('Clicked!'));

    // Using RxJS we create an observable instead.

    fromEvent(this.addBtn.nativeElement, 'click').subscribe(({x, y}: MouseEvent) => {
      this.listEvents.push({x, y});
    });
  }

}
