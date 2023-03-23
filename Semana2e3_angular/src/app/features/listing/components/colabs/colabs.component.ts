import { Component } from '@angular/core';

@Component({
  selector: 'app-colabs',
  templateUrl: './colabs.component.html',
  styleUrls: ['./colabs.component.scss']
})
export class ColabsComponent {
  person: Colaborator = {
    id: 7,
    name: 'Nathan',
    wage: 4500,
    ocupation: 'Dev PI'
  }

  addColab () {
    alert("Esse botão é meramente ilustrativo")
  }
}

interface Colaborator {
  id: number;
  name: string;
  wage: number;
  ocupation: string;
}
