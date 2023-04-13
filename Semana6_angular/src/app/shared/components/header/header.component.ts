import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  title = 'Semana4-angular';
  constructor(private router: Router) {

  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url)
  }
}
