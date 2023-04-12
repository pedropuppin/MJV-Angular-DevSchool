import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule // precisa importar o SharedModule pra poder usar o app-header e o app-footer no login.component.html
  ],
  exports: [
    LoginComponent // importado para o "app.module.ts"
  ]
})
export class LoginModule { }


// module de login gerado com "ng g m features/login"
