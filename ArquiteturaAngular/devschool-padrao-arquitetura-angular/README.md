# Angular - Arquitetura

Instalar dependencias com `npm install`

Abrir dois terminais:
Rodar servidor do angular com `npm run start`
e rodar servidor do backend no outro terminal com `npm run server`

** Arquivos com explicações:
  - app.module.ts
  - shared/core/async/todos-api.service.ts
  - share/core/state/todo-state.sevice.ts
  - share/core/facade/todos-facade.service.ts
  - shared/enviroments
  - features/components/todo-item/todo-item.component.ts
  - features/components/todo-list/todo-list.component.ts
  - features/components/pages/todos-page.component.ts

# Anotações

1) No arquivo package.json temos o `"server": "json-server db.json"` que vai simular um banco de dados
  - cada campo na raiz do db.json vai representar um tipo de entidade

2) Nem sempre vamos ter esse padrão visto na service `todos-facade.service.ts` pq nesse exemplo, não estamos
  utilizando nenhuma biblioteca de gerenciamento de estado (NgRx, Redux, etc). No exemplo visto, estamos usando
  o BehaviorSubject que é um dos jeitos de implementar um gerenciamento de estado baseado em observables, que pra
  muitos casos ele funciona bem. Mas quando usado alguma biblioteca, o `todos-facade.service.ts` iria ser diferente
  ou opcional e em alguns casos até mesmo não recomendado.

3) retomar 58:35

# Exercícios

- Adicionar o campo de descrição de uma tarefa
- Implementar uma página de detalhes do Todo (/todos/:id) que lista todos os dados da tarefa, utilizando o observable de ActivatedRoute.params para pegar o id da rota e mapear o id para o todo respectivo.
- Implementar estratégia de sincronização de dados otimista nas operações de adicionar/editar/deletar Todo (opcional)
