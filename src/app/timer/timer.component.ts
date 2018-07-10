import { Component, OnInit } from '@angular/core';
import { TimerserviceService } from '../timerservice.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  constructor(private timeService: TimerserviceService) { }
  ngOnInit() {
  }

  time:number;
  showTimer(){
    
    this.time = this.timeService.getTimer();
    var interval = setInterval(()=>{    
      this.time--;
      if(this.time == 0){
        clearInterval(interval);
      }
 }, 1000);
  }
}
