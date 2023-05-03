import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({ // *1
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [ // *2
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent), // forwardRef -> permite que o angular encontre o componente mesmo que ele ainda não tenha sido definido até esse momento
      multi: true,
    },
  ],
})

export class CounterComponent implements ControlValueAccessor { // *3
  value = 0;

  onChange: null | ((value: number | null) => void) = null;
  onTouched: null | (() => void) = null;

  writeValue(value: number): void { // *3.1
    console.log('writeValue', value);
    this.value = value;
  }

  plus(): void {
    this.value++;
    // 31 - 37 integração com o componente de formulário
    if (this.onChange) {
      console.log('onChange plus', this.value);
      this.onChange(this.value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  minus(): void {
    this.value--;
    // integração com o componente de formulário
    if (this.onChange) {
      console.log('onChange minus', this.value);
      this.onChange(this.value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // recebem uma função de callback (OnChange e OnTouched) que são chamadas quando o componente sofre alteração ou interação do usuário.
  // É feito dessa forma para as funções serem chamadas no momento certo, pois o componente não sabe quando o formulário precisa ser atualizado.
}


// 1. Componentes de Formulário -> são componentes que fazem sua comunicação com o mundo externo através de ngModel e diretivas de
// formulário reativo (formControlName, formControl, formGroup, etc);

// 2. NG_VALUE_ACCESSOR -> é uma constante que permite que o componente seja registrado como um componente de formulário.

// 3. ControlValueAccessor -> é uma interface que permite que um componente se comporte como um componente de formulário. Precisa implementar
// três métodos: writerValue, registerOnChange e registerOnTouched.
// 3.1. writeValue -> para quando o formulário é alterado e o componente precisa refletir o novo valor;
// 3.2. registerOnChange -> para quando o volor do componente é alterado e precisa notificar o formulário;
// 3.3. registerOnTouched -> para quando o componente sofre interação do usuário e o angular poder aplicar as classes de acordo;

// onChange -> é chamada dentro
