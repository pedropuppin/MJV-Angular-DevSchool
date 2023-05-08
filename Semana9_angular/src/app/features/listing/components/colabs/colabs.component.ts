import { Component } from '@angular/core';
import { Colaborator } from '../../models/colaborators.model';
import { ColaboratorsService } from 'src/app/shared/services/colaborators.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-colabs',
  templateUrl: './colabs.component.html',
  styleUrls: ['./colabs.component.scss']
})

export class ColabsComponent {

  //toda vez que carregar o componente de "colabs" vai INJETAR o service de "ColaboratorsService" pra dentro da variável colaboratorService
  constructor (
    private colaboratorService: ColaboratorsService,
    private router: Router,
    private _formBuilder: FormBuilder, // Ratio buttons com reactive forms
  ) {}

  // chamando a array de colaborators pela função definida no service de colaborators
  colaborators: Array<Colaborator> = this.colaboratorService.getColaborators()

  dataHoje = new Date();

  showColab = true;

  toggleColab () {
    this.showColab = !this.showColab;
  }

  detailsColab(idColaborator: number) {
    this.router.navigateByUrl(`details-colab/${idColaborator}`)
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url)
  }

  // Angukar Material variables
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
