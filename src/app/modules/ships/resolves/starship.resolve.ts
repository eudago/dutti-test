import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/interfaces/ship';
import { ShipsService } from '../ships.service';

@Injectable()
export class StarshipResolver implements Resolve<Ship> {
  constructor(private shipsService: ShipsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ship> {
    return this.shipsService.findById(route.params.id);
  }
}
