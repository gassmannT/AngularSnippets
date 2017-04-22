import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from "./async/async.component";
import { StartComponent } from "./start/start.component";
import { SeoComponent } from "./seo/seo.component";
import { FormComponent } from "./forms/form.component";

const routes: Routes = [
  {
    path: 'forms', component: FormComponent, children:
    [
      { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
      { path: 'template-driven', component: TemplateDrivenFormComponent },
      { path: 'reactive', component: ReactiveFormComponent }
    ]
  },
  { path: 'seo', component: SeoComponent },
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
  StartComponent,
  SeoComponent,
  FormComponent,
  TemplateDrivenFormComponent,
  ReactiveFormComponent
];