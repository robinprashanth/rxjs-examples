import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  userName: string = "Arnold";

  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    });
  }

  ngOnInit(): void {
    this._utilityService.starter.next(true);
  }

  ngOnDestroy() {
    this._utilityService.starter.next(false);
  }

}
