import { SideMenu } from './../../components/side-menu/side-menu';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenu
],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage { }
