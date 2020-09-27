import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipPagination } from 'src/app/interfaces/ship';

@Injectable()
export class ShipsService {

  constructor(private http: HttpClient) { }

  getStarships(url = 'https://swapi.dev/api/starships'): Observable<ShipPagination> {
    return this.http.get<ShipPagination>(url);
  }
}
