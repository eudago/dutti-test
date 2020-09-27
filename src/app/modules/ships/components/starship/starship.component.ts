import { Component, Input, OnInit } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  _starship: Ship;
  @Input() set starship(ship: Ship) {
    this._starship = {
      ...ship,
      shipId: this.getStarshipId(ship)
    }
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  private getStarshipId(ship: Ship): string {
    return ship.url.split("/").filter(function (item) {
      return item !== "";
    }).slice(-1)[0]
  }
}
