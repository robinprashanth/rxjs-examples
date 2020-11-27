import { Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';

import { ObservableHomeComponent } from './observable-home/observable-home.component';
import { OfFromComponent } from './of-from/of-from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';

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
            }
        ]
    }
];
