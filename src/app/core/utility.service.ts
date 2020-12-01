import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Injectable()
export class UtilityService {

    starter = new Subject<boolean>();
    userName = new BehaviorSubject<string>('Arnold');

    videoEmit = new ReplaySubject<string>(2);

    constructor(
    ) {}

}
