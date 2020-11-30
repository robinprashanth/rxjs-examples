import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { CompTitleComponent } from './comp-title/comp-title.component';
import { CompTest1Component } from './comp-test1/comp-test1.component';
import { CompTest2Component } from './comp-test2/comp-test2.component';
import { CompTest3Component } from './comp-test3/comp-test3.component';


@NgModule({
  declarations: [CompTitleComponent, CompTest1Component, CompTest2Component, CompTest3Component],
  exports: [
    CompTitleComponent,
    CompTest1Component, CompTest2Component, CompTest3Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
