import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
  ) {}

  public canActivate(): Observable <boolean> | boolean {
    return this.authenticationService.getCurrentUser().pipe(map((data)=>{ 
      if(data!=null && data.authdata) return true; 
      else this.router.navigate(['/login']);
    }))
  }
}
