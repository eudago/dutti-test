import { NgModule } from '@angular/core';
import { ShipsComponent } from './ships.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipsRoutingModule } from './ships-routing.module';

@NgModule({
  declarations: [ShipsComponent],
  imports: [
    SharedModule,
    ShipsRoutingModule
  ]
})
export class ShipsModule { }
