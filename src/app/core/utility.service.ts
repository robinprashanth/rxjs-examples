import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable()
export class UtilityService {

    starter = new Subject<boolean>();
    userName = new BehaviorSubject<string>('Arnolds');

    constructor(
    ) {}

}
