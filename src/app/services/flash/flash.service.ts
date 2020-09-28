import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Flash, FlashType } from 'src/app/interfaces/flash';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  flash = new BehaviorSubject<Flash>(null);
  _flash: Flash;

  constructor(private router: Router) {
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.clearFlashMessage();
      }
    });  
  }

  getFlash() {
    return this.flash.asObservable();
  }

  success(message, keepAfterLocationChange) {
    this.setFlash(message, keepAfterLocationChange, FlashType.Success);
  }

  error(message, keepAfterLocationChange) {
    this.setFlash(message, keepAfterLocationChange, FlashType.Error);
  }

  private setFlash(message, keepAfterLocationChange, type) {
    this._flash = {
      message: message,
      type: type, 
      keepAfterLocationChange: keepAfterLocationChange
    }
    this.flash.next(this._flash);
  }

  private clearFlashMessage() {
    if(this._flash) {
      if(!this._flash.keepAfterLocationChange) {
        this._flash = null;
        this.flash.next(this._flash);  
      }
      else {
        // only keep for a single location change
        this._flash.keepAfterLocationChange = false;
      }
    }
  }
}
