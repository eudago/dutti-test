import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ship } from 'src/app/interfaces/ship';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  @Input() starships: Ship[];
  @Output() onFetchNextPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
