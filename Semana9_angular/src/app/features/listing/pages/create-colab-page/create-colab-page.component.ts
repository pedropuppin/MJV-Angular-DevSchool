import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboratorsService } from 'src/app/shared/services/colaborators.service';

@Component({
  templateUrl: './create-colab-page.component.html',
  styleUrls: ['./create-colab-page.component.scss']
})
export class CreateColabPageComponent{

  constructor(
    private router: Router,
    private colaboratorsService: ColaboratorsService
  ) { }

  colaboratorForm = new FormGroup({ // é o grupo responsável pelo formulário
    name: new FormControl('', [Validators.required]), // cada valor é um formControl, que pode ter validações e um valor inicial definido (no caso, vazio)
    ocupation: new FormControl('', [Validators.required]),
    wage: new FormControl(1500, [Validators.required, Validators.min(1500), Validators.max(5000)]),
    openToWork: new FormControl(null, [Validators.required])
  })

  onSubmit() {
    const formValue: any = this.colaboratorForm.value // pega o valor do formulário e guarda na variável formValue
    // console.log(formValue);
    formValue.openToWork = formValue.openToWork === 'true' ? true : false
    this.colaboratorsService.create(formValue)
    this.router.navigateByUrl('colaborators')
  }
}


// poderia ser usado o ngModel para pegar os valores do form, mas como é um formulário mais extenso e que requer validações,
// é melhor usar o formsModule para manipular os dados do formulário
