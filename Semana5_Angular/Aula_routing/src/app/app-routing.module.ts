import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, // string vazia faz ser a primeira página que vai carregar
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
