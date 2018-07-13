import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  seconds = 5;

  constructor(private router: Router) {
    this.countdown();
  }

  countdown() {
    setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        this.router.navigate(['/']);
        // this.routes.navigate(['/your-path']);
      }
    }, 1000);
  }
}
