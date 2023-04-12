import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}


//component para controlar a navegação de rotas gerado com "ng g c features/home/pages/home --skip-selector"

// esse componente serve para exibir a informação do products-list (ou a info da página principal)

// o "--skip-selector" tira o (selector: 'app-home') que iria aparecer dento da decraração de Component na linha 3

//a diferença entre um componente que é uma página e um que é realmente um componente é só a ausência do selector


// caminho para criar uma página é:
// 1 - Criar o <nome-arquivo>.component.ts dentro da pasta pages/<nome-arquivo>
// 2 - exportar o <nome-arquivo>Component no <nome-arquivo>.module.ts
// 3 - importar o <nome-arquivo>Component no app.module.ts
// 4 - Criar o path no app-routing.module.ts
