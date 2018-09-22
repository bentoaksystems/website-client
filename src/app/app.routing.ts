import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', loadChildren: 'app/site/site.module#SiteModule'},
];

export const routing = RouterModule.forRoot(
  APP_ROUTES,
);
