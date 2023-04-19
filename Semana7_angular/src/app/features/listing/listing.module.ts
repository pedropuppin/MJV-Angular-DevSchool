import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColaboratorsComponent } from './pages/colaborators/colaborators.component';
import { DetailsColabComponent } from './pages/details-colab/details-colab.component';



@NgModule({
  declarations: [
    ColabsComponent, //component
    ColaboratorsComponent, // page
    DetailsColabComponent // page
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
