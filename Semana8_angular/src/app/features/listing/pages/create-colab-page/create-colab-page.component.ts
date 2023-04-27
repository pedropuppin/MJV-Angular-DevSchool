import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboratorsService } from 'src/app/shared/services/colaborators.service';
import { Colaborator } from '../../models/colaborators.model';

@Component({
  templateUrl: './create-colab-page.component.html',
  styleUrls: ['./create-colab-page.component.scss']
})
export class CreateColabPageComponent implements OnInit {

  constructor(
    private router: Router,
    private colaboratorsService: ColaboratorsService
  ) { }

  colaboratorForm = new FormGroup({ // é o grupo responsável pelo formulário. Gera um objeto com os valores do formulário
    name: new FormControl('', [Validators.required]), // cada valor é um formControl, que pode ter validações e um valor inicial definido (no caso, vazio)
    ocupation: new FormControl('', [Validators.required]),
    wage: new FormControl(1500, [Validators.required, Validators.min(1500), Validators.max(5000)]),
    openToWork: new FormControl(null, [Validators.required])
  })

  ngOnInit() {}

  onSubmit() {
    const formValue = this.colaboratorForm.value // pega o valor do formulário e guarda na variável formValue
    console.log(formValue);
    // dar algum jeito de converter o valor do openToWork para boolean
    // this.colaboratorsService.create(formValue)
  }
}


// poderia ser usado o ngModel para pegar os valores do form, mas como é um formulário mais extenso e que requer validações,
// é melhor usar o formsModule para manipular os dados do formulário
