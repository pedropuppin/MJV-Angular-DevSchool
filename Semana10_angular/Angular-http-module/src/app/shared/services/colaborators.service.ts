import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborator} from 'src/app/features/listing/models/colaborators.model';

@Injectable({ // significa que é aberto pra fazer injeção de dependencias dentro das outras classe, nesse caso, dos componentes
  providedIn: 'root' // deixa aberto pra aplicação inteira
})
export class ColaboratorsService {

  constructor(
    private http: HttpClient, // injeção de dependencia do HttpClient
  ) { }

  baseURL: string = 'http://localhost:3000';

  options = {
    headers: { // os headers são as informações que a gente envia para o back-end (ajudam a validar autenticações e autorizações por exemplo)
      'Content-Type': 'application/json' // se alguma informação for passada vai ser no formato de json
    }
  };

  // o primeiro passo é deixar esse array vazio pra não ter nada fixo no front-end
  colaborators: Array<Colaborator> = [];

  //temos que fazer uma requisição do tipo GET para pegar os dados do back-end. Fazemos isso usando o HttpClient do Angular.
  // ta sendo chamada no "colabs.component.ts"
  getColaborators() {
    // return this.colaborators; - modo antigo
    return this.http.get<Array<Colaborator>>(this.baseURL + '/colaborators/all', this.options);
  }
  // precisa fazer o subscribe no "colabs.component.ts" pra pegar os dados

  getById(id: number) {
    // return this.colaborators.find((colaborators) => colaborators.id === id);
    return this.http.get<Colaborator>(this.baseURL + `/colaborators/${id}`, this.options);
  }
  // para exibir os detalhes do colaborador precisamos fazer um subscribe lá no "details-colab.component.ts"

  create(colaborator: Colaborator) {
    // colaborator.id = this.generateNextId();
    // this.colaborators.push(colaborator as Colaborator);
    return this.http.post<Colaborator>(this.baseURL + '/colaborators/create/', colaborator, this.options); // passamos a rota e o objeto que queremos criar (colaborator)
  }
  // "'/colaborators/create'" é a rota que a gente criou no back-end (project-nodejs)
  // precisa fazer o subscribe no "create-colab-page.component.ts" pra pegar os dados

  remove(id: number) {
    return this.http.delete(this.baseURL + '/colaborators/remove/' + id, this.options)
  }

  update(colaborator: Partial<Colaborator>) { // é um partial pq nem sempre se precisa alterar tudo de um colaborador
    return this.http.put(this.baseURL + '/colaborators/update/' + colaborator.id, { name: "nome alterado" }, this.options)
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
