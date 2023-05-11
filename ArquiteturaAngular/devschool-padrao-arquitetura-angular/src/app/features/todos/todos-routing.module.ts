import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodosDetailsComponent } from './pages/todos-details/todos-details.component';

const routes: Routes = [
  { path: '', component: TodosPageComponent }, // rota lazy loaded
  { path: ':id', component: TodosDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
