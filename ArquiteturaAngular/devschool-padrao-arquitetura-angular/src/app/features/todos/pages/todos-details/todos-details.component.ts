import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { TodosFacadeService } from 'src/app/shared/facade/todos-facade.service';
import { TodoState } from 'src/app/shared/types/todo.type';

@Component({
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private todosFacade: TodosFacadeService,
  ) { }

  // type para reperesntar o estado do 'todo' que será renderizado na página
  todoState!: TodoState;

  ngOnInit(): void {
    this.activatedRoute
      .params // é um observable que emite os parâmetros da rota ativa
      .pipe(
        map(params => params.id), // transforma os parâmetros da rota em um observable que emite o id do 'todo'
        switchMap(todoId => this.todosFacade.getTodoById(todoId)) // toda vez que chegar um novo id, vamos fazer a requisição pro facadeService
      )
      .subscribe(todoState => this.todoState = todoState);
  }

}
