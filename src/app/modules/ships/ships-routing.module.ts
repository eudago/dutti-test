import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipResolver } from './resolves/starship.resolve';
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
  { 
    path: ':id', 
    component: StarshipDetailComponent,
    resolve: {
      starship: StarshipResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipsRoutingModule { }
