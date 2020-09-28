import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Ship, ShipPagination } from 'src/app/interfaces/ship';

const defaultUrl = 'https://swapi.dev/api/starships';
const cacheTime = 300000; // 5 minutes

@Injectable()
export class ShipsService {

  ships$: Observable<ShipPagination>;

  constructor(private http: HttpClient) { }

  getStarships(url = defaultUrl): Observable<ShipPagination> {
    if((url === defaultUrl && !this.ships$) || url != defaultUrl ) {
      this.ships$ = this.http.get<ShipPagination>(url).pipe(
        shareReplay({ bufferSize: 1, refCount: true, windowTime: cacheTime })
      );  
    }

    return this.ships$;
  }

  findById(id): Observable<Ship> {
    return this.http.get<Ship>(`https://swapi.dev/api/starships/${id}`);
  }
}
