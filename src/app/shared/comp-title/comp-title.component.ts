import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-title',
  templateUrl: './comp-title.component.html',
  styleUrls: ['./comp-title.component.scss']
})
export class CompTitleComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
