import { Component, OnInit } from '@angular/core';
import components from '../../server/components.config';
import { ShellService } from './shared/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private shellService: ShellService) {}

  ngOnInit() {
    console.log(components);
    this.shellService.init({
      initialRoute: '/dashboard',
      outletId: 'content',
      preload: true,
      clients: {
        'dashboard-view': {
          loaded: false,
          src: 'http://localhost:3001/components/dashboard-view-es2015.js',
          element: 'dashboard-view',
          route: '/dashboard'
        }
      }
    });
  }
}
