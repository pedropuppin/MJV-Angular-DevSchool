import { Injectable } from '@angular/core';
import { Colaborator} from 'src/app/features/listing/models/colaborators.model';

@Injectable({ // significa que é aberto pra fazer injeção de dependencias dentro das outras classe, nesse caso, dos componentes
  providedIn: 'root' // deixa aberto pra aplicação inteira
})
export class ColaboratorsService {

  constructor() { }

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
  ];

  getColaborators() {
    return this.colaborators;
  }

  getById(id: number) {
    return this.colaborators.find((colaborators) => colaborators.id === id);
  }

  create(colaborator: Partial<Colaborator>) {
    colaborator.id = this.generateNextId();
    this.colaborators.push(colaborator as Colaborator);
  }

  generateNextId() {
    return this.colaborators[(this.colaborators.length - 1)].id + 1;
  }
}


// Conforme a Arquitetura do Angular a utilização de Serviços tem o propósito de organizar o projeto de software Angular,
// isolando lógica de negócio e separando-a dos Controllers. Não é possível afirmar que seja obrigatório utilizar serviços,
// mas é muito desejável.

// o service de products permite a array<Products> que tava no "colabs.components.ts" ser acessada por outros componentes
// da aplicação.

//o papel dessa service é gerenciar os dados dos produtos


// mais sobre services em -> https://jacksongomesbr.gitbooks.io/desenvolvimento-web-front-end-com-angular/content/servicos.html
