import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColabsComponent } from './components/colabs/colabs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColaboratorsComponent } from './pages/colaborators/colaborators.component';
import { DetailsColabComponent } from './pages/details-colab/details-colab.component';
import { CreateColabPageComponent } from './pages/create-colab-page/create-colab-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// importações do angular material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    MatProgressSpinnerModule, // importa o spinner do angular material
    MatButtonModule, // importa os botões do angular material
    MatCardModule, // importa os cards do angular material
    MatCheckboxModule,
  ],
  exports: [
    ColabsComponent,
    ColaboratorsComponent
  ]
})
export class ListingModule { }
