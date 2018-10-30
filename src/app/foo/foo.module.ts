import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    FooComponent
  ],
  declarations: [FooComponent, BarComponent]
})
export class FooModule { }
