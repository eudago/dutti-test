import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getByUsername(username) {
    return new Promise((resolve) => {
      const filtered = this.getUsers().filter(u => u.username === username);
      resolve(filtered.length ? filtered[0] : null);
    })
  }

  create(user: User) {
    return new Promise((resolve) => {
      this.getByUsername(user.username).then((duplicateUser) => {
        if (duplicateUser !== null) {
          resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
        } else {
          const users = this.getUsers();

          // assign id
          var lastUser = users[users.length - 1] || { id: 0 };
          user.id = lastUser.id + 1;

          // save to local storage
          users.push(user);
          this.setUsers(users);

          resolve({ success: true });
        }
      })
    })
  }

  private getUsers() {
    if(!localStorage.users){
      localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  private setUsers(users) {
    localStorage.users = JSON.stringify(users);
  }

}
