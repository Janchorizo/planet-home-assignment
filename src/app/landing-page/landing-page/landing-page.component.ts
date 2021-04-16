import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  data: DataService;

  constructor(data: DataService) {
      this.data = data;
  }

  ngOnInit(): void {
      console.log(this.data)
  }


}
