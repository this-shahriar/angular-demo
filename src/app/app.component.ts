import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;
  mobile = false;
  routeExtn = 'authors';

  constructor(router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) this.routeExtn = val.url;
    });
  }

  ngOnInit() {
    if (screen.width <= 600) this.mobile = true;
  }
}
