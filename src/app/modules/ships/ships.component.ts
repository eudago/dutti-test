import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipPagination } from 'src/app/interfaces/ship';

import { ShipsService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  shipsPagination: ShipPagination;

  constructor(
    private shipsService: ShipsService,   
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.shipsPagination = this.route.snapshot.data.starships;
  }

}
