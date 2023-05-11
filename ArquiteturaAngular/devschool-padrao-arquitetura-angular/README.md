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

# Exercícios

- Adicionar o campo de descrição de uma tarefa

- Implementar uma página de detalhes do Todo (/todos/:id) que lista todos os dados da tarefa, utilizando o observable de ActivatedRoute.params para pegar o id da rota e mapear o id para o todo respectivo.

- Implementar estratégia de sincronização de dados otimista nas operações de adicionar/editar/deletar Todo (opcional)

# Resolução comentada

2) Exercício 2
  - Primeiro criar o componente "todo-details" em pages e depois criar a rota para a página em "todo-routing.module.ts".

  - Criar no "todo-item.component.ts" um `@Output`(selected) para emitir qual task foi selecionada.
  - Criar um butão no "todo-item.component.html" com o evento `onSelected()` que vai emitir o evento do click.
  - Criar no "todo-item.component.ts" o método `onSelected()` que vai lidar com o click emitindo o valor do Output (o valor é a task).

  - Criar no "todo-list.component.ts" um `@Output`(todoSelected) para emitir qual task foi selecionada.
  - Criar no "todo-list.component.html" o `(selected)="onTodoSelected($event)` para escutar o evento emitido (selected).
  - Criar o método `onTodoSelected()` que vai lidar com o evento e propagar ele pro componente pai.

  - Na pagina principal "todos-page.component.html" colocar um evento `(todoSelected)="onSelectedTodoChanged($event)"` para
    escutar o evento emitido (todoSelected).
  - Nesse método precisamos navegar para rota que a gente criou.

  - Implementar o "todo-details.component.ts".
  - Criar no "todos-facade.service.ts" o método `getTodoById()` que vai ser responsável.
  - Criar no "todos-api.service.ts" o método `getTodo()` que vai retornar a path da task.

  - Exibir o estado da task na tela "todos-details.component.html".
