import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  showParent: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.showParent = this.activatedRoute.children.length === 0;
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.showParent = e.url === '/programs';
      }
    });
  }

}
