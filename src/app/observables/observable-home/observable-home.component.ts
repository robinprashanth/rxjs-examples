import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-home',
  templateUrl: './observable-home.component.html',
  styleUrls: ['./observable-home.component.scss']
})
export class ObservableHomeComponent implements OnInit {

  public observableTypes = [
    {
      name: "fromEvent",
      link: "from-event"
    },
    {
      name: "interval",
      link: "interval"
    },
    {
      name: "of-from",
      link: "of-from"
    },
    {
      name: "toArray",
      link: "toArray"
    },
    {
      name: "custom Observable",
      link: "cust-observable"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
