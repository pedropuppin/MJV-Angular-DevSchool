import { Component } from '@angular/core';
import { Colaborator } from '../../models/colaborators.model';

@Component({
  selector: 'app-colabs',
  templateUrl: './colabs.component.html',
  styleUrls: ['./colabs.component.scss']
})

export class ColabsComponent {
  colaborators: Array<Colaborator> = [
    {
      id: 1,
      name: 'Nathan',
      wage: 4500,
      ocupation: 'Dev PI',
      openToWork: false
    },
    {
      id: 2,
      name: 'Alan',
      wage: 4500,
      ocupation: 'Dev PI',
      openToWork: false
    },
    {
      id: 3,
      name: 'Pedro',
      wage: 4500,
      ocupation: 'Tatuador',
      openToWork: true
    },
    {
      id: 4,
      name: 'Victoria',
      wage: 4500,
      ocupation: 'Médica',
      openToWork: true
    },
    {
      id: 5,
      name: 'Isadora',
      wage: 4500,
      ocupation: 'Designer',
      openToWork: true
    }
  ]

  dataHoje = new Date();

  showColab = false;

  addColab () {
    alert("Esse botão é meramente ilustrativo")
  }

  toggleColab () {
    this.showColab = !this.showColab;
  }
}
