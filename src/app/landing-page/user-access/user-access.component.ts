import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {
  router: Router;
  userService: UserService;
  loggedIn: boolean;
  registrating: boolean;
  
  loginEmail: string;
  loginPassword: string;
  registrationFirstName: string;
  registrationLastName: string;
  registrationEmail: string;
  registrationPassword: string;
  
  constructor(userService: UserService, router: Router) {
    this.router = router;
    this.userService = userService;
    this.userService.getUser().subscribe(() => {
      this.loggedIn = this.userService.isLoggedIn();
    })
    
    this.registrating = false;
    this.loginEmail = '';
    this.loginPassword = '';
    this.registrationFirstName = '';
    this.registrationLastName = '';
    this.registrationEmail = '';
    this.registrationPassword = '';
  }
  
  handleChange(field, value) {
    switch(field){
      case 'loginEmail':
      this.loginEmail = value;
      break;
      case 'loginPassword':
      this.loginPassword = value;
      break;
      case 'registrationFirstName':
      this.registrationFirstName = value;
      break;
      case 'registrationLastName':
      this.registrationLastName = value;
      break;
      case 'registrationEmail':
      this.registrationEmail = value;
      break;
      case 'registrationPassword':
      this.registrationPassword = value;
      break;
    }
  }
  
  ngOnInit(): void {
    console.log(this.userService)
  }
  
  setRegistrating(value: boolean) {
    this.registrating = value;
  }
  
  handleLoginClick() {
    if (this.loginEmail.length > 0 && this.loginPassword.length > 0) {
      this.userService.login({email: this.loginEmail, password: this.loginPassword});
    }
  }
  
  handleRegistrateClick() {
    if (this.registrationFirstName.length > 0 &&
        this.registrationLastName.length > 0 &&
        this.registrationEmail.length > 0 &&
        this.registrationPassword.length > 0) {
        this.userService.register({
          first_name: this.registrationFirstName,
          last_name: this.registrationLastName,
          email: this.registrationEmail,
          password: this.registrationPassword
        });
      }
    }
    
    handleGoClick() {
      if (this.loggedIn === true) {
        this.router.navigate(['/app/movies'])
      }
    }
  }
  