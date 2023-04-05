// 1 -> KEYOF - representa o conjunto de chaves válidas para aquele objeto. Gera uma union
interface Professor {
  name: string;
  age: number;
}

type ProfessorProperties = keyof Professor // name | age
const professorProperties: ProfessorProperties = 'name'

// ex2
const person = {
  name: 'João',
  age: 30,
  address: {
    street: 'Rua abc',
    number: 123
  }
};

type PersonKeys = keyof typeof person;

// ex3
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]; // 'keyof' garante que o argumento key (K) seja uma chave válida para o obj (T)
const personName = getProperty(person, 'name'); //string
const personAge = getProperty(person, 'age'); // number
const personStreet = getProperty(person.address, 'street'); //string


// 2 -> ITERSECTION - combina diferentes tipos (a diferença entre intesection e union é que o intersection PRECISA conter todas as propriedades definidas nos tipos)
interface Point {
  x: number;
  y: number;
}

type Named = {
  name: string;
}

type NamedPoint = Point & Named
const namedPoint: NamedPoint = { // se tirar uma propriedade gera um erro de compilação
  name: 'Named Point',
  x: 12,
  y: 13
}
