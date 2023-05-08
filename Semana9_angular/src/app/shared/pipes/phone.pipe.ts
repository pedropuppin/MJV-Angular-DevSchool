import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const vs = value.split('');
    const phoneForm = `(${vs[0]}${vs[1]}) ${vs[2]}${vs[3]}${vs[4]}${vs[5]}${vs[6]}-${vs[7]}${vs[8]}${vs[9]}${vs[10]}`
    return phoneForm;
  }

}


// arquivo gerado para a config de um pipe custom para tratar telefones padrão BR, foi criado na pasta shared pq ele pode ser
// usado em qualquer lugar da aplicação. Ela está declarada no "shared.moldule.ts"
// comando -> "ng g pipe nome-pipe"
