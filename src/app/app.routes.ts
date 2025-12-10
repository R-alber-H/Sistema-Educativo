import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout/layout';
import { Cursos } from './pages/cursos/cursos';
import { Profesores } from './pages/profesores/profesores';
import { Alumnos } from './pages/alumnos/alumnos';
import { authGuard } from './guard/auth-guard';
import { hasRoleGuard } from './guard/rol-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
  path: '',
  component: Layout,
  canMatch: [authGuard],
  children: [
    { path: 'dashboard', component: Dashboard },
    { path: 'cursos', component: Cursos},
    { path: 'profesores', component: Profesores, canActivate: [hasRoleGuard(['ADMINISTRADOR'])] },
    { path: 'alumnos', component: Alumnos, canActivate: [hasRoleGuard(['ADMINISTRADOR', 'PROFESOR'])] },
  ]
}

];
