import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../types/todo.type';


// interfaces que representam a estrutura de dados do estado da aplicação
export interface TodoFilters {
  title: string | null;
  isCompleted: boolean | null;
}

export interface TodosState {
  loaded: boolean;
  loading: boolean;
  saving: boolean;
  todos: Todo[];
  filters: TodoFilters;
  todosBeingSaved: Record<string, true | undefined>
}

@Injectable({
  providedIn: 'root'
})

export class TodosStateService {

  /**
   Estado principal representado por um BehaviorSubject, que tem o conceito de "valor atual"

   BehaviorSubject --> é um tipo de Observable do RxJS que armazena o valor atual e o emite para seus assinantes sempre
   que uma nova assinatura é feita. Ele é útil para casos em que você precisa armazenar e acessar o estado atual de um
   objeto ao longo do tempo.
   Quando você cria um BehaviorSubject, você deve inicializá-lo com um valor padrão. Esse valor será o valor inicial
   emitido para todos os novos assinantes. Em seguida, você pode atualizar o valor do BehaviorSubject usando o método next().
   Todas as novas assinaturas recebem o valor mais recente do BehaviorSubject, mesmo que seja alterado após a assinatura.

  */
  private state$ = new BehaviorSubject<TodosState>({ // inicializando o BehaviorSubject com o valor inicial do estado da aplicação
    loaded: false,
    loading: false,
    todos: [],
    saving: false,
    filters: {
      isCompleted: null,
      title: null,
    },
    todosBeingSaved: {},
  });

  /**
   * Utilizamos essa função para expor o estado como um Observable,
   * para evitar que os métodos de next/error/complete BehaviorSubject fiquem expostos
   */
  getState(): Observable<TodosState> {
    return this.state$.asObservable();
    // temos que transformar o BehaviorSubject em um Observable para que ele não possa ser alterado de fora da classe.
    // Como o BehaviorSubject tem o produtor exposto, qualquer classe ou objeto poderia chamar os metodos de next/error/complete e alterar o estado
  }

  /*
  Métodos de atualização do estado. Percebam que nós estamos sempre gerando um novo objeto literal, usando o operador
   ... spread para copiar o estado antigo e alterar somente o que for necessário
*/

  setTodos(todos: Todo[]) { // setTodos recebe um array de objetos do tipo Todo
    this.state$.next({ // chama o método next do objeto state$, que é um BehaviorSubject, para emitir um novo valor com as atualizações
      ...this.state$.getValue(), // utilização do operador spread (...) para criar uma nova cópia do objeto atual "this.state$.getValue()"
      todos: todos // sobrescrever a propriedade todos com o novo valor recebido como argumento (todos).
    });
  }

  // .getValue() -> é um método do BehaviorSubject. Ele retorna o valor atual do BehaviorSubject, ou seja, o último valor emitido pelo state$.
  // É útil quando você precisa obter o valor atual do BehaviorSubject sem se inscrever nele como um observador.

  addTodo(todo: Todo) {
    const state = this.state$.getValue(); // pegando o valor atual do BehaviorSubject
    this.state$.next({ // emitindo um novo valor para qualquer observador que esteja inscrito no fluxo de dados
      ...state, // copiando o valor atual do BehaviorSubject com o operador spread
      todos: [ // atualizando a propriedade todos com um novo array que contém todos os elementos do array anterior e o novo elemento
        ...state.todos,
        todo,
      ],
    });
  }

  editTodo(todo: Todo) {
    const state = this.state$.getValue(); // pegando o valor atual do BehaviorSubject
    this.state$.next({ // emitindo um novo valor para qualquer observador que esteja inscrito no fluxo de dados
      ...state,
      todos: state.todos.map(t => { // o map está percorrendo o array de todos e checando se o id do todo é igual ao id do todo que está sendo editado
        // trocando o todo antigo pelo todo novo se id for igual
        if (t.id === todo.id) {
          return todo; // se o id for igual, retorna o todo novo passado no parametro
        }
        return t; // se o id não for igual, retorna o todo antigo
      }),
    });
  }

  removeTodo(id: string) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todos: state.todos.filter(t => t.id !== id) // retorna um novo array com todos os elementos que não tem o id igual ao id passado no parametro
    });
  }

  setLoading(loading: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loading: loading,
    });
  }

  setLoaded(loaded: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loaded: loaded,
    });
  }

  setSaving(saving: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      saving: saving,
    });
  }

  setFilters(filters: TodoFilters) {
    this.state$.next({
      ...this.state$.getValue(),
      filters: filters,
    });
  }

  setTodoBeingSaved(todoId: string) { // método para indicar que um todo está sendo salvo
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todosBeingSaved: { // cria um novo abjeto literal
        ...state.todosBeingSaved,
        // adicionamos o id do Todo aqui como true para indicar que ele está sendo salvo
        [todoId]: true, // [todoId] -> é uma forma de adicionar uma propriedade com o nome dinâmico. Essa variável "todoId"
                        // vai ser transformada em string e vai ser o nome da propriedade do objeto
      },
    });
  }

  setTodoNotBeingSaved(todoId: string) { // inverso do método anterior
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todosBeingSaved: {
        ...state.todosBeingSaved,
        // setamos o todoId aqui para undefined para "remover" o item do objeto
        [todoId]: undefined
      },
    });
  }
}
