import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';



@NgModule({
  declarations: [
    ColabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColabsComponent
  ]
})
export class ListingModule { }
