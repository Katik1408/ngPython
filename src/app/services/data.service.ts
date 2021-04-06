import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messageSource = new BehaviorSubject('Default');
  currentMessage$ = this.messageSource.asObservable();
  constructor() {}

  changeData(data: string) {
    this.messageSource.next(data);
  }
}
