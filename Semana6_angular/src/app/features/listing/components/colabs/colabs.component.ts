import { Component } from '@angular/core';
import { Colaborator } from '../../models/colaborators.model';
import { ColaboratorsService } from 'src/app/shared/services/colaborators.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colabs',
  templateUrl: './colabs.component.html',
  styleUrls: ['./colabs.component.scss']
})

export class ColabsComponent {

  //toda vez que carregar o componente de "colabs" vai INJETAR o service de "ColaboratorsService" pra dentro da variável colaboratorService
  constructor (
    private colaboratorService: ColaboratorsService,
    private router: Router) {}

  // chamando a array de colaborators pela função definida no service de colaborators
  colaborators: Array<Colaborator> = this.colaboratorService.getColaborators()

  dataHoje = new Date();

  showColab = true;

  addColab () {
    alert("Esse botão é meramente ilustrativo")
  }

  toggleColab () {
    this.showColab = !this.showColab;
  }

  detailsColab(idColaborator: number) {
    this.router.navigateByUrl(`details-colab/${idColaborator}`)
  }
}
