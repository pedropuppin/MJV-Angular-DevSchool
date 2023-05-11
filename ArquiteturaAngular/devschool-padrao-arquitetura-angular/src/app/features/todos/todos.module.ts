import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosDetailsComponent } from './pages/todos-details/todos-details.component';



@NgModule({
  declarations: [
    TodosPageComponent,
    TodoListComponent,
    TodoItemComponent,
    TodosDetailsComponent
  ],
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
})
export class TodosModule { }
