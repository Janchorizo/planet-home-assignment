import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';

const routes = [
    {path: '', component: LandingPageComponent}
]

export const landingRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    landingRouting
  ]
})
export class LandingPageModule { }
