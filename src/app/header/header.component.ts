import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TimerserviceService } from '../timerservice.service';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  timer:number;
  constructor(private timeService: TimerserviceService) { }
  ngOnInit() {
  }

  @Input() TimerComponent: TimerComponent;

  @HostListener('startTimer')
  startTimer(timervalue){
    this.timeService.addTimer(timervalue);
    this.TimerComponent.showTimer();
  }

}
