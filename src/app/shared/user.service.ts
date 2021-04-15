import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiService: ApiService;
  dataService: DataService;
  user: object|null;

  constructor(
    apiService: ApiService,
    dataService: DataService
  ) {
      this.apiService = apiService;
      this.dataService = dataService;
      this.dataService.getUser().subscribe(
        user => { this.user = user; }
      );
  }

  isLoggedIn(){
    return this.user !== null;
  }

  getUser() {
    return this.dataService.getUser();
  }

  fetchUser() {
    this.apiService.hit('getCurrentUser').subscribe(
      response => {
        if (response.status === 200) {
          this.dataService.setUser(response.body);
        }
      }
    );
  }

  register(user) {
    this.apiService.hit('createUser', null, null, user).subscribe(
      response => {
        if (response.status === 200) {
          this.login({email: user.email, pasword: user.password});
        }
      }
    );
  }

  deleteAccount() {
    this.apiService.hit('deleteCurrentUser').subscribe(
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
          console.info('Succesfuly logged in. Token: ', response.body);
          this.fetchUser();
        }
      }
    );
  }

  updateAccount(user) {
    this.apiService.hit('updateCurrentUser', null, null, user).subscribe(
      response => {
        if (response.status === 200) {
          this.fetchUser();
        }
      }
    );
  }
}
