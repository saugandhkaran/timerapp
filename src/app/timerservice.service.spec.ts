import { TestBed, inject } from '@angular/core/testing';

import { TimerserviceService } from './timerservice.service';

describe('TimerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerserviceService]
    });
  });

  it('should be created', inject([TimerserviceService], (service: TimerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
