// "tsc --init" -> cria o arquivo tsconfig.json com as configs recomendadas
// "tsc" -> compila o projeto
// "npm install --save-dev typescript" -> instala o typescript na pasta node modules do projeto

let boolean: boolean = false;
let string: string = "abc"

const soma = (x: number, y: number): number => x + y;
//podemos criar um type pra representar os tipos de x e y
type ArithmeticFunc = (x: number, y: number) => number;

const sum: ArithmeticFunc = (x, y) => x + y;
const muitiply: ArithmeticFunc = (x, y) => x * y;
const division: ArithmeticFunc = (x, y) => x / y;

//especiais
let any: any;
let unknown: unknown;
let never: never;
let object: object;

// tipagem de objetos (type cannot be re-opened to add new properties vs an interface which is always extendable)
interface Person {
  name: string;
  age: number;
  isProfessor: boolean;
}

const person = {
  name: "Alan",
  age: 32,
  isProfessor: true
}

type Car = {
  color: string;
  year: number;
}

const car = {
  color: "black",
  year: 2010
}

//tipagem de arrays
const professores: string[] = ["Alan", "Nathan"]
const professoresV2: Array<string> = ["Alan", "Nathan"]

// enum (define a set of named constants)
enum PersonType {
  Aluno,
  Professor
}

const aluno = PersonType.Aluno;
const professor = PersonType.Professor;

interface DevSchoolPerson {
  type: PersonType;
}

const schoolStudent: DevSchoolPerson = {
  type: PersonType.Aluno
}


// unions (allow the union o two or more types)

type stringOrBoleano = string | boolean
let stringOrBoo: stringOrBoleano = "abc" //accepts booleans and strings

interface User {
  readonly id: string; // (readonly) makes impossible to change the property
  name: string;
  email?: string; // (?) transforms into a optional property
}

interface Classroom {
  id: number;
  subject: string;
}

type UserOrClassroom = User | Classroom
const check = (userOrClassroom: UserOrClassroom) => userOrClassroom.id


//Tipos literais (usefull when used with unions. Work similar as an enum)

const a = "a"; // const a has a type of "a"
const positivo = true; // type of true

const pedro = {
  name: "pedro",
  student: true
} as const


//Classes

class UserDevSchool {

  constructor (protected id: string, public name: string) {
  }

  private getNameUppercase = () => { //can only be accessed by the class
    return this.name.toUpperCase();
  }
}

interface TemMaterias {
  materias: string[];
}

// EXTENDS copy everything from a class and IMPLEMENTS only inherit the "shape"

class Professor extends UserDevSchool implements TemMaterias {
  materias: string[];

  constructor (id: string, name: string, materias: string[]) {
    super(id, name);
    this.materias = materias
  }
}

const prof = new Professor("123", "Alan", ["typescript"]); //professor instance (it has a type of professor)

// const test = (user: Professor) => {
//   user.
// }
