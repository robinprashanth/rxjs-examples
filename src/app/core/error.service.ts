import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if(!err.error || !err.error.error){
      console.log('network error');
      errMsg = 'network error';
    } else {
      if(err.error.error === "some error"){
        console.log('some error');
        errMsg = 'some error';
      }
    }
    return throwError(errMsg);

  }
}
