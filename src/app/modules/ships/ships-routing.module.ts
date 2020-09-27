import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsResolver } from './resolves/starships.resolve';

import { ShipsComponent } from './ships.component';

const routes: Routes = [
  { 
    path: '', 
    component: ShipsComponent,
    resolve: {
      starships: StarshipsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
