import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TxtReaderComponent } from './txt-reader/txt-reader/txt-reader.component';

const routes: Routes = [
  { path: 'txt-reader', component: TxtReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
