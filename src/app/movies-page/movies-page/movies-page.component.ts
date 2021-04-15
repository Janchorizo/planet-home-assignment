import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
    focused = false;
    transitioned = false;
    altBgColor = 'white';
    router: Router;
  
    constructor(router: Router){
      this.router = router;
    }
  
    ngOnInit(): void {
    }
  
    handleMouseEnter(){
        this.focused = true;
    }
  
    handleMouseExit(){
      this.focused = false;
    }

    handleAccountMouseEnter() {
        this.altBgColor = '#9289c8';
        this.focused = true;
    }

    handleAcountClick() {
        this.transitioned = true;
        setTimeout(() => {
          this.router.navigate(['/app/account']);
        }, 600);
    }

    handleLogoutMouseEnter() {
        this.altBgColor = 'white';
        this.focused = true;
    }

    handleLogoutClick() {
        this.transitioned = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 600);
    }

    handleMouseLeave() {
        this.focused = false;
    }
}
