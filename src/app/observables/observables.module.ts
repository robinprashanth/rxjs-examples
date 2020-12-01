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
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckOperatorComponent } from './pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './take-operator/take-operator.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceOperatorComponent } from './debounce-operator/debounce-operator.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';


@NgModule({
  declarations: [ObservableHomeComponent, FromEventComponent, IntervalComponent, OfFromComponent, ToArrayComponent, CustomObsComponent, MapOperatorComponent, PluckOperatorComponent, FilterOperatorComponent, TapOperatorComponent, TakeOperatorComponent, RetryOperatorComponent, DebounceOperatorComponent, SubjectComponent, ReplaySubjectComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(ObservablesRoutes),
  ]
})
export class ObservablesModule { }
