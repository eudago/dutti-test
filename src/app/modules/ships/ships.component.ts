import { Component, OnInit } from '@angular/core';
import { ShipPagination } from 'src/app/interfaces/ship';

import { ShipsService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  shipsPagination: ShipPagination;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getStarships().subscribe((r: ShipPagination) => {
      this.shipsPagination = r;
    })
  }

}
