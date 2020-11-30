import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-comp-test2',
  templateUrl: './comp-test2.component.html',
  styleUrls: ['./comp-test2.component.scss']
})
export class CompTest2Component implements OnInit {

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
