import { InjectionToken } from '@angular/core';
import { Injectable, Inject } from '@angular/core';

export const DOCUMENT = new InjectionToken<Document>('Document object');

export const SET_INTERVAL = new InjectionToken<typeof setInterval>(
  'setInterval function'
);
@Injectable()
export class TimerService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(SET_INTERVAL) private setInterval: Function
  ) {}

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output');
    let counter: number = 0;
    this.setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
