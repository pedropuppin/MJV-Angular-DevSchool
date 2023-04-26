import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{

  title = 'Semana7-angular';
  user?: User // essas variáveis foram declaradas com opcionais ("?:") pq elas podem começar com o valor vazio

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user'); // pega a chave "user" que a gente setou lá no login-page.component.ts e guarda na variável "userSessionStorage"
    if(userSessionStorage) {
      this.user = JSON.parse(userSessionStorage);
      // se a gente tiver o "userSessionStorage", pegarmos a variável user declarada na linha 14 e fazemos o parse, para transformar o tipo dela de
      // string para objeto novamente, assim conseguimaos usar o ngIf em cima dessa variável no header.component.html
    }
  }

  exit() {
    sessionStorage.clear(); // simula sair do site e voltar (limpa o local storade do navegador)
    this.router.navigateByUrl('login');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url)
  }
}
