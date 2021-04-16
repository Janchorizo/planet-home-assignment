import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LoginGuardService } from './shared/login_guard.service';

const routes: Routes = [
    {path: 'app', children: [
        {
            path: 'movies',
            loadChildren: () => import('./movies-page/movies-page.module').then(m => m.MoviesPageModule),
            canLoad: [LoginGuardService]
        },
        {
            path: 'account',
            loadChildren: () => import('./account-page/account-page.module').then(m => m.AccountPageModule),
            canLoad: [LoginGuardService]
        },
    ]}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      LandingPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
