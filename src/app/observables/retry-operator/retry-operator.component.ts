import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

  public person;
  public loading = false;
  public status = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchRemoteDetails() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(3)
      retryWhen( err => err.pipe(
        delay(3000),
        scan((retryCount, one)=> {
          if(retryCount >= 5 ) {
            throw err;
          } else {
            retryCount = retryCount + 1;
            this.status = `Retrying attempt ${retryCount}`;
            return retryCount;
          }
        }, 0)
      ))

    ).subscribe(
      res => {
        this.loading = false;
        this.person = res[0];
        this.status = "success";
    },
    () => {
      this.loading = false;
      this.status = "failed";
    });
  }

}
