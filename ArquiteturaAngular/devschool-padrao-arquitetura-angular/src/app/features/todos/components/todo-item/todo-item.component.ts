import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Todo, TodoListItem } from 'src/app/shared/types/todo.type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// É um componente puro responsável por renderizar CADA ITEM dos 'todos'

export class TodoItemComponent {

  showDetails = false;

  @Input()
  todo!: TodoListItem; // recebe um 'todo' do componente pai

  // Os outputs são os eventos disparados pelos botões de cada item dos 'todos'
  @Output()
  toggleStatus = new EventEmitter<Todo>();

  @Output()
  toggleFavorite = new EventEmitter<Todo>();

  @Output()
  delete = new EventEmitter<Todo>();

  @Output()
  selected = new EventEmitter<Todo>();

  onToggleClicked() {
    this.toggleStatus.emit(this.todo);
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.todo);
  }

  onDeleteClicked() {
    this.delete.emit(this.todo);
  }

  onSelected() {
    this.selected.emit(this.todo);
  }
}
