import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {B1Component} from './b1/b1.component';
import {B2Component} from './b2/b2.component';

const routes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: 'b1',
        component: B1Component
      },
      {
        path: 'b2',
        component: B2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {
}
