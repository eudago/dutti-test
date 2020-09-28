import {Directive, ViewContainerRef, TemplateRef, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Directive({
  selector: '[appLogged]'
})
export class LoggedDirective implements OnDestroy {

  userSub$: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef,
    private authenticationService: AuthenticationService
  ) { 
    this.userSub$ = this.authenticationService.getCurrentUSer().subscribe((user) => {
        if(user && user.authdata) {
          this.viewContainerRef.clear();
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
          this.viewContainerRef.clear();
        }
      })
  }

  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }
}
