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
import { TakeOperatorComponent } from './take-operator/take-operator.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';
import { DebounceOperatorComponent } from './debounce-operator/debounce-operator.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { ConcatOpratorComponent } from './concat-oprator/concat-oprator.component';
import { MergeOpratorComponent } from './merge-oprator/merge-oprator.component';
import { MergemapOpratorComponent } from './mergemap-oprator/mergemap-oprator.component';
import { CatchOpratorComponent } from './catch-oprator/catch-oprator.component';

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
            },
            {
                path: 'take-operator',
                component: TakeOperatorComponent
            },
            {
                path: 'retry-operator',
                component: RetryOperatorComponent
            },
            {
                path: 'debounce-operator',
                component: DebounceOperatorComponent
            },
            {
                path: 'subject',
                component: SubjectComponent
            },
            {
                path: 'replay-subject',
                component: ReplaySubjectComponent
            },
            {
                path: 'concat-operator',
                component: ConcatOpratorComponent
            },
            {
                path: 'merge-operator',
                component: MergeOpratorComponent
            },
            {
                path: 'mergemap-operator',
                component: MergemapOpratorComponent
            },
            {
                path: 'catch-operator',
                component: CatchOpratorComponent
            }
        ]
    }
];
