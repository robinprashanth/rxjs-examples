import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  starter: boolean = false;

  constructor(private _utilityService: UtilityService) { }

  ngOnInit(): void {
    this._utilityService.starter.subscribe(res => {
      this.starter = res;
    });
  }

}
