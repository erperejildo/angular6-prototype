import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnDestroy {
  seconds = 5;
  interval: any;

  constructor(private router: Router) {
    this.countdown();
  }

  public ngOnDestroy() {
    // leaving page
    clearInterval(this.interval);
  }

  countdown() {
    this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        this.router.navigate(['/']);
        // this.routes.navigate(['/your-path']);
      }
    }, 1000);
  }
}
