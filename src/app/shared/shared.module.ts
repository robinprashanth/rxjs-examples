import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { CompTitleComponent } from './comp-title/comp-title.component';


@NgModule({
  declarations: [CompTitleComponent],
  exports: [
    CompTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
