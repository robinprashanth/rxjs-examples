import { Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';

import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckOperatorComponent } from './pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';

export const ObservablesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ObservableHomeComponent
            },
            {
                path: 'from-event',
                component: FromEventComponent
            },
            {
                path: 'interval',
                component: IntervalComponent
            },
            {
                path: 'of-from',
                component: OfFromComponent
            },
            {
                path: 'toArray',
                component: ToArrayComponent
            },
            {
                path: 'cust-observable',
                component: CustomObsComponent
            },
            {
                path: 'map-operator',
                component: MapOperatorComponent
            },
            {
                path: 'pluck-operator',
                component: PluckOperatorComponent
            },
            {
                path: 'filter-operator',
                component: FilterOperatorComponent
            },
            {
                path: 'tap-operator',
                component: TapOperatorComponent
            }
        ]
    }
];
