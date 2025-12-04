import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: '',
    component: Layout, 
    children: [
      { path: 'dashboard', component: Dashboard },
    ]
  }
];
