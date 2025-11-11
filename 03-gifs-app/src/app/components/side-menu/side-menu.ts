import { Component } from '@angular/core';
import { GifsSideMenuHeader } from "../side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOptions } from "../side-menu-options/gifs-side-menu-options";

@Component({
  selector: 'app-side-menu',
  imports: [GifsSideMenuOptions, GifsSideMenuHeader],
  templateUrl: './side-menu.html',
})
export class SideMenu { }
