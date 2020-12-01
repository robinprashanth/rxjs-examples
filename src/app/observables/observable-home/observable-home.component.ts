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
    },
    {
      name: "map",
      link: "map-operator"
    },
    {
      name: "pluck",
      link: "pluck-operator"
    },
    {
      name: "filter",
      link: "filter-operator"
    },
    {
      name: "tap",
      link: "tap-operator"
    },
    {
      name: "take",
      link: "take-operator"
    },
    {
      name: "retry, retryWhen",
      link: "retry-operator"
    },
    {
      name: "debounce and distinctUntilChanged",
      link: "debounce-operator"
    },
    {
      name: "subject and Behavior subject",
      link: "subject"
    },
    {
      name: "replay subject",
      link: "replay-subject"
    },
    {
      name: "concat",
      link: "concat-operator"
    },
    {
      name: "merge",
      link: "merge-operator"
    },
    {
      name: "mergeMap",
      link: "mergemap-operator"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
