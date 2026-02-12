import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { Routes } from '@angular/router';
import { Countrylayout } from './layouts/countrylayout/countrylayout';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { ByContryPage } from './pages/by-contry-page/by-contry-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: Countrylayout,
    children: [
      {path: 'by-capital', component: ByCapitalPage},
      {path: 'by-country', component: ByContryPage},
      {path: 'by-region', component: ByRegionPage},

      {path: '**',  redirectTo: 'by-capital',}


    ]
  },
];

export default countryRoutes;
