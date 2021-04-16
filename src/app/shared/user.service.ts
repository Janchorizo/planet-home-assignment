import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiService: ApiService;
  dataService: DataService;
  user: User|null;

  constructor(
    apiService: ApiService,
    dataService: DataService
  ) {
      this.apiService = apiService;
      this.dataService = dataService;
      this.dataService.getUser().subscribe(
        (user: User) => { this.user = user; }
      );
  }

  isLoggedIn(): boolean{
    return this.user !== null;
  }

  getUser() {
    return this.dataService.getUser();
  }

  fetchUser() {
    this.apiService.hit('getCurrentUser', null, null, null, this.user?.token).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.setUser({
            ...response.body,
            token: this.user.token
          })
        }
      }
    );
  }

  register(user) {
    this.apiService.hit('createUser', null, null, {user}).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.setUser({
            ...response.body.user,
            token: response.body.token
          })
        }
      }
    );
  }

  deleteAccount() {
    this.apiService.hit('deleteCurrentUser', null, null, null, this.user?.token).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.clearUser();
        }
      }
    );
  }

  login(user) {
    this.apiService.hit('login', null, null, user).subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.setUser({
            ...response.body.user,
            token: response.body.token
          })
        }
      }
    );
  }

  logout() {
    this.dataService.clearUser();
  }

  updateAccount(user) {
    this.apiService.hit('updateCurrentUser', null, null, {user}, this.user?.token).subscribe(
      response => {
        if (response.status === 200) {
          this.fetchUser();
        }
      }
    );
  }
}
