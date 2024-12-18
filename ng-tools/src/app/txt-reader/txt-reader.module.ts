import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxtReaderRoutingModule } from './txt-reader-routing.module';
import { TxtReaderComponent } from './txt-reader/txt-reader.component';


@NgModule({
  declarations: [
    TxtReaderComponent
  ],
  imports: [
    CommonModule,
    TxtReaderRoutingModule
  ]
})
export class TxtReaderModule { }
