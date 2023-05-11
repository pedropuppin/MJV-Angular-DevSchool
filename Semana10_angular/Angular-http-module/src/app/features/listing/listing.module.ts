import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColaboratorsComponent } from './pages/colaborators/colaborators.component';
import { DetailsColabComponent } from './pages/details-colab/details-colab.component';
import { CreateColabPageComponent } from './pages/create-colab-page/create-colab-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ColabsComponent, //component
    ColaboratorsComponent, // page
    DetailsColabComponent, // page
    CreateColabPageComponent // page
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule, // precisa importar para usar o formGroup
    MatButtonModule, // importa os botões do angular material
  ],
  exports: [
    ColabsComponent,
    ColaboratorsComponent
  ]
})
export class ListingModule { }
