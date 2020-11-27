import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ObservablesRoutes } from './observables.routing';

import { CommonModule } from '@angular/common';
import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { MaterialModule } from '../material/material.module';
import { FromEventComponent } from './from-event/from-event.component';
import { SharedModule } from '../shared/shared.module';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';


@NgModule({
  declarations: [ObservableHomeComponent, FromEventComponent, IntervalComponent, OfFromComponent, ToArrayComponent, CustomObsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(ObservablesRoutes),
  ]
})
export class ObservablesModule { }
