import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Todo } from '../../types/todo.type';
// quando tiver eusando o environment, tem sempre que se atentar pra não importar o environment de produção
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {

  readonly apiPath = `${environment.apiPath}/todos`;
  // tá pegando o caminho do environment (environment.ts é um arquivo especial do Angular que tem as variáveis de ambiente)

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> { // método get que retorna um Observable de um array de Todo
    return this.http.get<Todo[]>(this.apiPath);
  }

  getTodo(todoId: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiPath}/${todoId}`);
  }

  createTodo(todo: Todo) {
    return this.http.post<Todo>(this.apiPath, todo);
  }

  editTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.apiPath}/${todo.id}`, todo);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete<Todo>(`${this.apiPath}/${todo.id}`);
  }
}


// é uma service que o único propósito é interagir com o backend
