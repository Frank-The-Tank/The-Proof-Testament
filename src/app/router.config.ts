import {Route} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';

export const routerConfig: Route[] = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
