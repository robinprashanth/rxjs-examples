import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {

  public users = [
    {
      "_id": 1,
      "name": "Stacie Clark",
      "gender": "female"
    },
    {
      "_id": 2,
      "name": "Mollie Wilcox",
      "gender": "female"
    },
    {
      "_id": 3,
      "name": "Phillips Hammond",
      "gender": "male"
    },
    {
      "_id": 4,
      "name": "Horton Wright",
      "gender": "male"
    },
    {
      "_id": 5,
      "name": "Burke Tillman",
      "gender": "male"
    }
  ];

  public usersByLength = [];
  public usersByGender = [];
  public usersByNth = [];

  constructor() { }

  ngOnInit(): void {

    const obs1 = from(this.users);

    // Ex- 01 - filter by lenght

    obs1.pipe(
      filter(mem => mem.name.length > 14),
      toArray()
    ).subscribe((res) => {
      this.usersByLength = [...res];
    })
    // Ex- 02 - filter by Gender
    obs1.pipe(
      filter(mem => mem.gender === 'male'),
      toArray()
    ).subscribe((res) => {
      this.usersByGender = [...res];
    })
    // Ex- 03 - filter by nth 
    obs1.pipe(
      filter(mem => mem._id < 3 ),
      toArray()
    ).subscribe((res) => {
      this.usersByNth = [...res];
    })
  }

}
