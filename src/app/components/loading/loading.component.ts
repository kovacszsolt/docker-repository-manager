import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class AppLoadingComponent implements OnInit, OnDestroy {
  time = 0;
  // @ts-ignore
  countDown: Subscription;
  @Input() title = '';


  ngOnInit() {
    this.countDown = timer(0, 1000)
      .subscribe(() => {
        this.time++;
      })
  }

  ngOnDestroy(): void {
    this.countDown.unsubscribe()
  }
}
