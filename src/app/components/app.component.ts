import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-router';

  isOpenSubmenu: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      // console.log('event', e);
      if (e instanceof NavigationEnd) {
        // console.log('router url', e.url);
        if (!this.isOpenSubmenu && e.url.includes('/programs')) {
          this.isOpenSubmenu = true;
        }
      }

    });

  }
  openSubmenu() {
    this.isOpenSubmenu = !this.isOpenSubmenu;
  }
}
