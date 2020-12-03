import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable()
export class UtilityService {

    starter = new Subject<boolean>();
    userName = new BehaviorSubject<string>('Arnold');

    videoEmit = new ReplaySubject<string>(2);

    constructor( private http: HttpClient, private errService: ErrorService) {}

    getUsers(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
            catchError(this.errService.handleError)
        );
    }

}
