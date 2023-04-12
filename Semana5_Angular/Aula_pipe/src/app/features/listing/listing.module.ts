import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ColabsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColabsComponent
  ]
})
export class ListingModule { }
