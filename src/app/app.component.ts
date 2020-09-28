import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flash, FlashType } from './interfaces/flash';
import { FlashService } from './services/flash/flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  flashSubcription: Subscription;
  flash: Flash;
  public flashType = FlashType;

  constructor(private flashService: FlashService) {

  }

  ngOnInit() {
    this.flashSubcription = this.flashService.getFlash().subscribe((flash: Flash) => {
      this.flash = flash;
    });
  }

  ngOnDestroy() {
    if(this.flashSubcription) this.flashSubcription.unsubscribe();
  }

}
