import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-comp-test3',
  templateUrl: './comp-test3.component.html',
  styleUrls: ['./comp-test3.component.scss']
})
export class CompTest3Component implements OnInit {

  userName: string;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    });
   }


  ngOnInit(): void {
  }

  updateName(uName) {

    this._utilityService.userName.next(uName.value);
  }

}
