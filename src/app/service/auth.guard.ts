import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //   return localStorage.getItem('token')?.includes
    //     ? //  &&  localStorage.getItem('token') == '12345'
    //       true
    //     : this.router.navigate(['/login']);

    // }
    if (localStorage.getItem('token')?.includes) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
