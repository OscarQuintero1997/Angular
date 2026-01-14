import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "./side-menu-header.component/side-menu-header.component";
import { SideMenuOptionsComponent } from "./side-menu-options.component/side-menu-options.component";

@Component({
  selector: 'side-menu-component',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu-component.html',
})
export class SideMenuComponent { }
