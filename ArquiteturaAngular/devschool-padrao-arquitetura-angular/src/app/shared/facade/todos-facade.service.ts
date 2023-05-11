import { Injectable } from '@angular/core';
import { Observable, of, combineLatest, merge } from 'rxjs';
import { catchError, distinctUntilChanged, filter, finalize, map, mergeMap, retry, shareReplay, startWith, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { TodosApiService } from '../core/async/todos-api.service';
import { TodoFilters, TodosStateService } from '../core/state/todos-state.service';
import { Todo, TodoListItem, TodoState } from '../types/todo.type';

@Injectable({
  providedIn: 'root'
})

// Service encarregada de prover e processar todos os dados pra gerar os observables e os métodos de ações para atender
// as necessidades dos componentes da página

export class TodosFacadeService {

  constructor(
    private todosApi: TodosApiService, // '../core/async/todos-api.service'
    private todosState: TodosStateService, // '../core/state/todos-state.service'
  ) {}

  /**
   * Todos as tarefas incluindo se ela está sendo salva ou não
   */
  readonly allTodos$ = this.todosState // representa todos os "todos"
    .getState() // função que retorna o estado atual como um Observable
    .pipe(
      tap(state => console.log(state)), // operador opcional para debugar o estado atual
      map(state => { // vai transformar o "state" em uma lista de "TodoListItem"
        return state.todos
          .map<TodoListItem>(todo => { // é a interface que tem a propriedade "isSaving"
            return {
              ...todo,
              isSaving: state.todosBeingSaved[todo.id] || false // mudando a propriedade "isSaving" com base no estado de "todosBeingSaved"
              // vai retornar true ou undefined, se for undefined vai retornar false ("|| false")
            }
          })
      }),
      distinctUntilChanged(), // evita emições repetidas se não mudar nada
      shareReplay(1), // é uma forma de otimizar
    )

    /**
      shareReplay() --> é usado para compartilhar o resultado de um Observable com múltiplos subscribers. Ele memoriza
      o último valor emitido e envia esse valor para cada novo subscriber. Isso evita que seja criada uma nova fonte de
      dados (observable) a cada nova inscrição (subscription). Quando você tem um observable que tem múltiplas inscrições,
      ele pode gerar efeitos colaterais, como a criação de várias chamadas HTTP desnecessárias. Esse operador evita esse problema,
      ao compartilhar os valores emitidos pelo observable com todas as inscrições, em vez de criar novos observables a cada nova
      inscrição. No caso a cima, O argumento 1 indica que apenas o último valor será memorizado, ou seja, sempre que um novo subscriber
      se inscrever, ele receberá imediatamente o último valor emitido pelo Observable.
    */

  /**
   * Estado atual dos filtros
   */
  readonly filters$ = this.todosState
    .getState()
    .pipe(
      map((state) => state.filters),
      distinctUntilChanged(),
      shareReplay(1),
    );

  /**
   * Estado de loading das tarefas
   */
  readonly loading$ = this.todosState
    .getState()
    .pipe(
      map((state) => state.loading),
      distinctUntilChanged(),
      shareReplay(1),
    );

  /**
   * Estado de salvamento de uma nova tarefa
   */
  readonly saving$ = this.todosState
    .getState()
    .pipe(
      map((state) => state.saving),
      distinctUntilChanged(),
      shareReplay(1),
    );

  /**
   * Lista de tarefas filtradas com base nos filtros atuais
   */
  readonly filteredTodos$ = combineLatest([this.allTodos$, this.filters$]) // combina os dois observables em um só (lista de "todos" e os "filters")
    .pipe(
      map(([todos, filters]) => { // o map está recebendo uma tupla com os dois valores
        return todos.filter(todo => {
          // filtragem de completo, se for nulo não fazemos nada pois representa "todos"
          if (filters.isCompleted !== null) {
            if (todo.isCompleted !== filters.isCompleted) { // se não for nulo e for diferente do filtro, retorna false e remove da lista
              return false;
            }
          }
          // filtro pelo nome
          if (filters.title !== null && filters.title !== '') {
            if (!todo.title.toLocaleLowerCase().includes(filters.title.toLocaleLowerCase())) { // se não for nulo e for diferente do filtro, retorna false e remove da lista
              return false;
            }
          }
          return true;
        })
      }))

  /**
   * Tarefas filtradas e ordenadas por favoritos -> transforma a lista de filtros (filteredTodos$)fazendo uma ordenação
   */
  readonly orderedTodos$ = this.filteredTodos$
    .pipe(
      map(orderTodosByFavorites)
    )

  /**
   * o número total de tarefas -> pega todos os 'todos' e conta quantos tem
   */
  readonly todosCount$ = this.allTodos$
    .pipe(map(todos => todos.length))

  /**
   * Lista de tarefas completadas -> Pega todos os 'todos' e filtra os que estão completados
   */
  readonly todosCompleted$ = this.allTodos$
    .pipe(map(todos => todos.filter(todo => todo.isCompleted)))

  /**
   * Número total de tarefas completadas -> calcula quantos 'todos' foram completados
   */
  readonly todosCompletedCount$ = this.todosCompleted$
    .pipe(map(todos => todos.length))


  /**
   * Ordena que as tarefas sejam carregadas do backend ou do cache
   */
  loadTodos(): Observable<Todo[]> {
    return this.todosState
      .getState() // retorna o estado atual como um Observable
      .pipe(
        take(1), // pegamos apenas o primeiro valor emitido pelo Observable
        switchMap(state => {
          if (state.loaded) {
            // todos já carregados, só retornamos a lista já carregada
            return of(state.todos) // 'of' é um operador de criação do rxjs que cria um Observable que emite e completa o valor passado como argumento
          } else {
            this.todosState.setLoading(true); // mudando o estado de loading para true pra que a tela possa ter um indicador de carregamento
            return this.todosApi
              .getTodos() // chamando o método getTodos() do service 'todosApi'
              .pipe(
                tap((todos) => {
                  this.todosState.setTodos(todos);
                  this.todosState.setLoaded(true);
                }),
                finalize(() => {
                  this.todosState.setLoading(false);
                })
              )
          }
        })
      )
  }
  /*
    1 - Sem a função take(1), o switchMap continuaria a ouvir o Observable original indefinidamente, aguardando novos valores que não são necessários nesse caso.

    2 - Utiliza o operador switchMap para transformar o Observable retornado pelo "take" em outro Observable, que será retornado por loadTodos().
        Dentro do switchMap, verifica se o estado (state) contém a propriedade loaded. Se loaded for true, retorna um Observable que emite os todos
        contidos no estado atual.

    3 - O operador 'switchMap()' espera que o retorno seja um Observable, e se retornássemos apenas 'state.todos', estaríamos retornando um array simples e
        não um Observable, o que poderia causar erros no fluxo de dados posteriormente. Ao envolver state.todos em 'of()', estamos criando um Observable que
        emite um único valor (o array 'state.todos'). Isso permite que o fluxo de dados continue a ser manipulado de forma consistente.
  */


  /**
   * Adiciona uma nova tarefa
   */
  addTodo(todo: Todo): Observable<Todo> {
    // inicializamos o estado de "saving"
    this.todosState.setSaving(true); // setando o estado de "saving" para true
    return this.todosApi.createTodo(todo) // chamando a api para criar um novo todo
      .pipe(
        tap((response) => {
          // se a resposta for bem sucedida nós adicionamos a tarefa
          this.todosState.addTodo(response);
        }),
        finalize(() => {
          // em caso de complete ou error, nós setamos o saving para false
          this.todosState.setSaving(false);
        })
      )
  }

  editTodo(todo: Todo): Observable<Todo> {
    // Descomente para simular uma resposta "otimista" mostra o todo sendo editado antes de receber a resposta do backend
    // this.todosState.editTodo(todo);
    this.todosState.setTodoBeingSaved(todo.id) // possibilita indicar que o todo está sendo salvo
    return this.todosApi.editTodo(todo) // chama o editTodo do service 'todosApi'
      .pipe(
        tap((response) => {
          this.todosState.editTodo(response); // usa o 'tap()' para notificar que todo foi editado
        }),
        finalize(() => {
          this.todosState.setTodoNotBeingSaved(todo.id) // utilizamos o finaliza para resetar o estado de salvamento do todo
        })
      )
  }


  deleteTodo(todo: Todo) {
    // resposta "otimista"
    // this.todosState.removeTodo(todo.id);
    this.todosState.setTodoBeingSaved(todo.id)
    return this.todosApi.deleteTodo(todo)
      .pipe(
        tap(() => {
          // aqui podemos remover o todo da nossa lista pelo ID, sem precisar fazer uma busca nos items do backend novamente
          this.todosState.removeTodo(todo.id);
        }),
        finalize(() => {
          this.todosState.setTodoNotBeingSaved(todo.id)
        })
      );
  }

  /**
   * Atualiza os filtros atuais
   */
  updateTodosFilters(filters: TodoFilters) {
    this.todosState.setFilters(filters);
  }

  getTodoById(todoId: string): Observable<TodoState> {
    return this.allTodos$
      .pipe(
        take(1),
        mergeMap((todos) => {
          const loadedTodo = todos.find(todo => todo.id === todoId); // verifica se o todo já está carregado
          if (loadedTodo) { // se já estiver carregado, retorna o state do todo
            const state: TodoState = {
              loading: false,
              todo: loadedTodo,
            }
            return of(state);
          }
          return this.todosApi.getTodo(todoId) // caso não esteja carregado, chama o getTodo do service 'todosApi'
          .pipe( // vamos ter que transformar a resposta
            tap(response => {
              this.todosState.addTodo(response); // recebeu a resposta e adiciona o todo no estado
            }),
            map(response => { // transforma a resposta em um TodoState
              const state: TodoState = {
                loading: false,
                todo: response,
              }
              return state;
            }),
            startWith(<TodoState>{ // starta um estado inicial indicando que ele está carregando e que o todo é nulo
              loading: true,
              todo: null
            }),
            catchError((error) => { // caso ocorra um erro, retorna um estado com o todo nulo
              const state: TodoState = {
                loading: false,
                todo: null,
              }
              return of(state);
            })
          )
        })
      )
  }
}

/**
 * Ordena os todos por favoritos
 */
export function orderTodosByFavorites(todos: TodoListItem[]): TodoListItem[] { // recebe o arroy de TodoListItem
  // utilizamos o slice aqui para duplicar o array, evitando de modificarmos o array original
  return todos.slice()
    .sort((a, b) => { // 'a' e 'b' é a comparacao de dois elementos do array
      if (a.isFavorited && !b.isFavorited) {
        return -1;
      }
      if (a.isFavorited && b.isFavorited) {
        return 0;
      }
      return 1;
    });
}
// o método '.sort' não gera um novo array e sim modifica o array original, por isso utilizamos o método '.slice' para duplicar o array
