import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate(): boolean {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage) return true; // se tiver o usuário logado permite mostrar as páginas
    this.router.navigateByUrl('login'); // se não tiver redireciona para a pág de login
    return false;
  }

}


// gerado com "ng g guard shared/guards/auth-guard --implements CanActivate" ele faz com que
// seja criado com a função canActivate

// o papel do guard é permitir ou não o acesso a uma rota

// essa forma de autenticação está depreciada. A forma atual é criar diretamente uma funão,
// que vai ser chamada dentro do canActivate na rota que queremos proteger
