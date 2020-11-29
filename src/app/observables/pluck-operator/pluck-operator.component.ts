import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss']
})
export class PluckOperatorComponent implements OnInit {

  public users = [
    {name: 'Liam', skill: 'fighting',
    hobbies : {
      name: 'football',
      expert: "defender"
    }
  },
    {name: 'John', skill: 'javascript',
    hobbies : {
      name: 'volleyball',
      expert: "defender"
    }},
    {name: 'Jacob', skill: 'Angular',
    hobbies : {
      name: 'cricket',
      expert: "bowler"
    }},
    {name: 'Mariam', skill: 'fighting',
    hobbies : {
      name: 'football',
      expert: "forward"
    }}
  ];

  public userStream = [];
  public userNestedStream = [];

  constructor() { }

  ngOnInit(): void {

    // Ex - 01
    from(this.users).pipe(
      pluck('name'),
      toArray()
    ).subscribe(res => {
      this.userStream = res;
    });
    // Ex - 02
    from(this.users).pipe(
      pluck('hobbies', 'name'),
      toArray()
    ).subscribe(res => {
      this.userNestedStream = res;
    });
  }

}
