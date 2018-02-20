import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  endTime: moment.Moment;
  countdownSubscription: Subscription;
  remainingMinutes: number;
  remainingSeconds: number;
  timesUp: boolean;
  logo: boolean;
  audio: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const minutes = +params.get('minutes') || 5;
        this.endTime = moment().add(minutes, 'minute');

        const logo = params.get('logo?');
        const audio = params.get('audio?');
        this.logo = logo === null || logo === 'true';
        this.audio = audio === null || audio === 'true';
        console.log(params);
      });

    this.countdownSubscription = Observable.interval(1000).subscribe(() => {
      const now = moment();
      if (now >= this.endTime) {
        this.killTimer();
      }

      const diff = this.endTime.diff(now);
      const remaining = moment(diff);
      this.remainingMinutes = remaining.minutes();
      this.remainingSeconds = remaining.seconds();
    });
  }

  ngOnDestroy(): void {
    this.killTimer();
  }

  private killTimer(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }

    this.timesUp = true;
  }
}
