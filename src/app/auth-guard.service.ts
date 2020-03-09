import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router: Router ) { }

  canActivate(): boolean {
    if( !( !!localStorage["token"] ) ){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
