import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout/layout';
import { Cursos } from './pages/cursos/cursos';
import { Profesores } from './pages/profesores/profesores';
import { Alumnos } from './pages/alumnos/alumnos';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: '',
    component: Layout, 
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'cursos', component: Cursos },
      { path: 'profesores', component: Profesores },
      { path: 'alumnos', component: Alumnos },
    ]
  }
];
