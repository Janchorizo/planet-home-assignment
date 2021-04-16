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

  constructor(router: Router, userService: UserService){
    this.userService = userService;
    this.router = router;
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

  }

  handleLastNameChange(newValue) {
    
  }

  handleEmailChange(newValue) {
      
  }

  handlePasswordChange(newValue) {
      
  }

  handlePasswordChangeClick() {
      
  }

  handleDeleteAccountClick() {
      
  }
}
