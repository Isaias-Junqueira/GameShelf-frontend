import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'studios',
  },
  {
    path: 'studios',
    loadComponent: () =>
      import('./features/studios/studios/studios').then(
        (module) => module.Studios,
      ),
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./features/games/games/games').then(
        (module) => module.Games,
      ),
  },
  {
    path: '**',
    redirectTo: 'studios',
  },
];
