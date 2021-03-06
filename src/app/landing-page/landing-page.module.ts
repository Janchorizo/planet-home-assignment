import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserAccessComponent } from './user-access/user-access.component';
import { LiquidHeroComponent } from './liquid-hero/liquid-hero.component';

const routes = [
    {path: '', component: LandingPageComponent}
]

export const landingRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LandingPageComponent,
    UserAccessComponent,
    LiquidHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    landingRouting
  ]
})
export class LandingPageModule { }
