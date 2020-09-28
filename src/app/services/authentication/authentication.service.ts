import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Base64 } from 'src/app/utils/base64';
import { UsersService } from '../users/users.service';
import { Response } from '../../interfaces/response';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: {
    username: String,
    authdata: String
  } = this.cookieService.get("auth") ? JSON.parse(this.cookieService.get("auth")) : null;

  currentUser$ = new BehaviorSubject(this.currentUser);

  constructor(private usersService: UsersService, private cookieService: CookieService) { 

  }

  getCurrentUSer(): Observable<any> {
    return this.currentUser$.asObservable();
  }

  getAuthData() {
    return this.currentUser && this.currentUser.authdata ? this.currentUser.authdata: null;
  }

  login(username: string, password: string): Promise<Response> {
    return this.usersService.getByUsername(username)
    .then((user: User) => {
      let response;
      if (user !== null && user.password === password) {        
        response = { success: true };
      } else {
        response = { success: false, message: 'Username or password is incorrect' };
      }
      return response;
    });
  }

  logout() {
    this.clearCredentials();
  }

  setCredentials(username: string, password: string) {
    const authdata = Base64.encode(username + ':' + password);

    this.currentUser = {
      username: username,
      authdata: authdata
    }

    this.currentUser$.next(this.currentUser);

    const cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    this.cookieService.set('auth', JSON.stringify(this.currentUser),  cookieExp);
  }

  clearCredentials() {
    this.currentUser = {
      username: '',
      authdata: ''
    }
    this.currentUser$.next(this.currentUser);
    this.cookieService.delete('auth');
  }
}
