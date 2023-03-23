import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  person: Colaborator = {
    id: 7,
    name: 'Nathan',
    wage: 4500,
    ocupation: 'Dev PI'
  }
}

interface Colaborator {
  id: number;
  name: string;
  wage: number;
  ocupation: string;
}
