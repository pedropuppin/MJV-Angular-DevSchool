// Crie um mixin "named" e tipo "HasName" para adicionar as propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName" que deverá adicionar um método "getFullName()" a
// um tipo qualquer que implemente "HasName"

export type Constructor<T = {}> = new (...args: any[]) => T;

type HasName = {
  firstName: string;
  lastName: string;
}

const addFirstAndLastName = <Base extends Constructor>(base: Base) => {
  return class extends base {
    firstName: string = '';
    lastName: string = '';
  }
}

class Person {}

const NamedPerson = addFirstAndLastName(Person);
const namedPerson = new NamedPerson(); // dá acesso a "namedPerson.firstName" e "namedPerson.lastName"


type HasFullName = {}

const fullNamed = <Base extends Constructor<HasName>>(base: Base) => {
  return class extends base{
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}

const GetFullName = fullNamed(NamedPerson);
const getFullName = new GetFullName();
getFullName.getFullName();
