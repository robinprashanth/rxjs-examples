import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'promise', component:  PromiseComponent},
  {
    path: 'observables',
    loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule)
 },
  {path: '**', redirectTo:  'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
