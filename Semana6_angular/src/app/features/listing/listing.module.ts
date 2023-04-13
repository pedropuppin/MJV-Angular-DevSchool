import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColaboratorsComponent } from './pages/colaborators/colaborators.component';



@NgModule({
  declarations: [
    ColabsComponent,
    ColaboratorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColabsComponent,
    ColaboratorsComponent
  ]
})
export class ListingModule { }
