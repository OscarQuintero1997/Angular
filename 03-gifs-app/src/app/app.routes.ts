import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/pages/dashboard-page.component/dashboard-page.component'),

    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending-page.component/trending-page.component'),
      },

      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search-page.component/search-page.component'),
      },

      {
        path: 'history/:query',
        loadComponent: () =>
          import('./gifs/pages/gif-history.component/gif-history.component'),
      },

      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
