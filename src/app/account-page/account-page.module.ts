import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes = [
    {path: '', component: AccountPageComponent}
]

export const accountRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    accountRouting
  ]
})
export class AccountPageModule { }
