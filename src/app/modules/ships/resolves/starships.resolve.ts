import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShipPagination } from 'src/app/interfaces/ship';
import { ShipsService } from '../ships.service';

@Injectable()
export class StarshipsResolver implements Resolve<ShipPagination> {
  constructor(private shipsService: ShipsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ShipPagination> {
    return this.shipsService.getStarships();
  }
}
