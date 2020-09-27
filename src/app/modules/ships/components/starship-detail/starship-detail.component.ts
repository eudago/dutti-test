import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ship } from 'src/app/interfaces/ship';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {

  starship: Ship;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.starship = this.route.snapshot.data.starship;
  }

}
