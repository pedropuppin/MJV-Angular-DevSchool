import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create-colab-page.component.html',
  styleUrls: ['./create-colab-page.component.scss']
})
export class CreateColabPageComponent implements OnInit {

  colaboratorForm = new FormGroup({ // é o grupo responsável pelo formulário. Gera um objeto com os valores do formulário
    name: new FormControl('', [Validators.required]), // cada valor é um formControl, que pode ter validações e um valor inicial definido (no caso, vazio)
    ocupation: new FormControl('', [Validators.required]),
    wage: new FormControl(1500, [Validators.required, Validators.min(1500), Validators.max(5000)]),
    openToWork: new FormControl('', [Validators.required])
  })

  ngOnInit() {}

  onSubmit() {
    console.log(this.colaboratorForm);
  }
}


// poderia ser usado o ngModel para pegar os valores do form, mas como é um formulário mais extenso e que requer validações,
// é melhor usar o formsModule para manipular os dados do formulário
