import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from "./async/async.component";
import { StartComponent } from "./start/start.component";

const routes: Routes = [
  { path: 'async', component: AsyncComponent },
  { path: 'start', component: StartComponent }, // default
  { path: '', redirectTo: '/start', pathMatch: 'full' }, // default
  { path: '**', redirectTo: '/', pathMatch: 'full' } // not found
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  AsyncComponent,
  StartComponent
  ];