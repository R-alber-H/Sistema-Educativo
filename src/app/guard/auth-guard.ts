import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth-service';
import { map } from 'rxjs';

export const authGuard: CanMatchFn = (
  route,
  segments,
): MaybeAsync<GuardResult> => {
  const router = inject(Router);

  return inject(AuthService).usuarioActual$.pipe(
    map((user) => {
      if (user) {
        return true;
      }

      return router.createUrlTree(['login']);
    }),
  );
};
