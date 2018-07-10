import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerserviceService {

  constructor() { }

  timeValue:number;

  addTimer(value:number){
    this.timeValue = value;
  }

  getTimer() {
    if (this.timeValue === undefined){
      return 10;
    }
    else
      return this.timeValue;
  }
}
