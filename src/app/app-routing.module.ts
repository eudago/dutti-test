import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) }, 
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
