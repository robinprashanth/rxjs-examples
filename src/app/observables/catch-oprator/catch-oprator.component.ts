import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-catch-oprator',
  templateUrl: './catch-oprator.component.html',
  styleUrls: ['./catch-oprator.component.scss']
})
export class CatchOpratorComponent implements OnInit {

  public person: any;
  public loading = false;
  public status = "";
  public error: string;

  constructor(private http: HttpClient, private _utilityService: UtilityService ) { }

  ngOnInit(): void {
  }

  fetchRemoteDetails() {
    this.error = "";
    this.person = null;
    this.loading = true;
    this._utilityService.getUsers().subscribe(
      res => {
        this.loading = false;
        this.person = res[0];
        this.status = "success";
    },
    (err) => {
      this.loading = false;
      this.status = "failed";
      this.error = err;
    });
  }

}
