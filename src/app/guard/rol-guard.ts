
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth-service'; 
import { Router } from '@angular/router';

export function hasRoleGuard(roles: string[]) {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const usuario = auth.usuarioActual$.value;

    if (!usuario) {
      router.navigate(['/']);
      return false;
    }

    if (!roles.includes(usuario.rol)) {
      router.navigate(['/dashboard']);
      return false;
    }

    return true;
  };
}
