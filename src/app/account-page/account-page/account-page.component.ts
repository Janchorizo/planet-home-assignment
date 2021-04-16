import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  focused = false;
  transitioned = false;
  router: Router;
  userService: UserService;
  user: any;
  newPassword: string;

  constructor(router: Router, userService: UserService){
    this.userService = userService;
    this.router = router;
    this.userService.getUser().subscribe(
      user => { this.user = user; }
    );
  }

  ngOnInit(): void {
  }

  onCLick() {
    this.transitioned = true;
    setTimeout(() => {
      this.router.navigate(['/app/movies']);
    }, 600);
  }

  handleMouseEnter(){
    this.focused = true;
  }

  handleMouseExit(){
    this.focused = false;
  }

  handleFirstNameChange(newValue) {
    if (newValue.length > 0) {
      console.info('Changing firstname to ', newValue);

      this.userService.updateAccount({
        first_name: newValue
      });
    }
  }

  handleLastNameChange(newValue) {
    if (newValue.length > 0) {
      console.info('Changing lastname to ', newValue);

      this.userService.updateAccount({
        last_name: newValue
      });
    }
  }

  handleEmailChange(newValue) {
    if (newValue.length > 0) {
      console.info('Changing email to ', newValue);

      this.userService.updateAccount({
        email: newValue
      });
    }
  }

  handlePasswordChange(newValue) {
    this.newPassword = newValue;
  }

  handlePasswordChangeClick() {
    if (this.newPassword?.length > 0) {
      console.info('Changing password to ', this.newPassword);

      this.userService.updateAccount({
        password: this.newPassword
      });
    }
  }

  handleDeleteAccountClick() {
    this.userService.deleteAccount();   
  }
}
