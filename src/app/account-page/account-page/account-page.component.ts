import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  focused = false;
  transitioned = false;
  router: Router;

  constructor(router: Router){
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
}
