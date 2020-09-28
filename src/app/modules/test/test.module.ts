import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule { }
