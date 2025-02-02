import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionKeysEnum } from '../../shared/session-keys.enum';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const token = sessionStorage.getItem(SessionKeysEnum.AUTH);

  if (token) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
