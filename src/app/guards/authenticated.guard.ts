import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
  ) {}

  public canActivate(): Observable <boolean> | boolean {
    const authData = this.authenticationService.getAuthData();
    if (!authData) {
      this.router.navigate(['/login']);
    }
    else return true;
  }
}
