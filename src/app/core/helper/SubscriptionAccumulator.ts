import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionAccumulator implements OnDestroy {
  subscriptions: Subscription[] = [];

  addSubscriber(s: Subscription): void {
    this.subscriptions[this.subscriptions.length] = s;
  }

  unsubscribeAll(): void {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
}
