import { NgModule } from '@angular/core';
import { ShipsComponent } from './ships.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipsRoutingModule } from './ships-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShipsService } from './ships.service';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { StarshipsResolver } from './resolves/starships.resolve';

@NgModule({
  declarations: [
    ShipsComponent, 
    StarshipsListComponent, 
    StarshipComponent, 
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    ShipsRoutingModule
  ],
  providers: [
    ShipsService,
    StarshipsResolver
  ]
})
export class ShipsModule { }
