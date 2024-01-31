import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);

        if (count === 99) {
          observer.complete();
        }
        if (count > 100) {
          observer.error(new Error('Count is greater than 100! That is not acceptable'));
        }
        count++;
      }, 0.001);
    });

    const newCustomIntervalObservable = customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    }))

    this.firstSubscription = newCustomIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log("Completed till 99");
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
