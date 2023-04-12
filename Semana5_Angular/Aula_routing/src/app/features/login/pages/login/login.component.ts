import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}


//component para controlar a navegação de rotas gerado com "ng g c features/login/pages/login --skip-selector"


// caminho para criar uma página é:
// 1 - Criar o <nome-arquivo>.component.ts dentro da pasta pages/<nome-arquivo>
// 2 - exportar o <nome-arquivo>Component no <nome-arquivo>.module.ts
// 3 - importar o <nome-arquivo>Component no app.module.ts
// 4 - Criar o path no app-routing.module.ts
