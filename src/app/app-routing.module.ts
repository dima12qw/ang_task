import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pages', loadChildren: 'src/app/main/main.module#MainModule' },
  {path: 'first', loadChildren: 'src/app/first/first.module#FirstModule'},
  {path: 'second', loadChildren: 'src/app/second/second.module#SecondModule'},
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
