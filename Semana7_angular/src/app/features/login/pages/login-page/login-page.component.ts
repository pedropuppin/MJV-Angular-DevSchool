import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email: string = ""
  password: string = ""
  error = false

  constructor (private userServices: UsersService, private router: Router) {}

  authenticate () {
    const user = this.userServices.getUserByEmailAndPassword(this.email, this.password)

    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user)) // ***
      this.router.navigateByUrl('colaborators');
    } else {
      this.error = true;
    }
  }
}

// *** Na linha 21 usamos o session storage do próprio navegador para guadar um usuário com chave e valor do tipo string.
// o "JSON.stringify(user)" pega o objeto do usuário e o transforma em uma string, pq a função setItem só aceita valores
// em string.

// salvamos um usuário no local storage do navegador pra gente poder fazer a lógica de mostrar/ocultar os botões no header.component.html
// e no header.component.ts

// gerado com "ng g c features/login/pages/login-page --skip-selector"
