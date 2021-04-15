import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { RouterModule } from '@angular/router';

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
    accountRouting
  ]
})
export class AccountPageModule { }
