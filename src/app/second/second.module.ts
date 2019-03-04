import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second/second.component';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [SecondComponent, B1Component, B2Component]
})
export class SecondModule { }
