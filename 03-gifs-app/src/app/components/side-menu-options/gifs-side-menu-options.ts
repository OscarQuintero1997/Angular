import { Component } from '@angular/core';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './gifs-side-menu-options.html',
})
export class GifsSideMenuOptions {
  menuoptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/searchS',
    },
  ]
}
