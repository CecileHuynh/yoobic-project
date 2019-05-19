import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
    },
    {
      title: 'Planets',
      url: '/menu/planets',
    },
    {
      title: 'Photos',
      url: '/menu/dashboard',
    }
  ];

  logout = '/home';
  selectedPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
}
