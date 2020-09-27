import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'ships', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) }, 
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }, 
  { 
    path: 'ships', 
    loadChildren: () => import('./modules/ships/ships.module').then(m => m.ShipsModule),
    canActivate: [ AuthenticatedGuard ]
  }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
