import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxtReaderComponent } from './txt-reader/txt-reader.component';

const routes: Routes = [
  { path: '', component: TxtReaderComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxtReaderRoutingModule { }
