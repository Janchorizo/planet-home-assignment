import { Injectable }       from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';
import { UserService }      from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanLoad {
  constructor(private userService: UserService, private router: Router) {
  }
  canLoad(route: Route): boolean {    
    if (this.userService.isLoggedIn()) {
	    return true; 
    }

    this.router.navigate([ '/' ]);
    return false;		
  }
} 