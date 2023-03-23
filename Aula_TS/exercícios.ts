// Exercício 1 - Crie um tipo para representar um objeto que contenha as suas
// informações de nome, profissão, idade e uma lista de assuntos de seu interesse.
interface Human {
  name: string;
  age: number;
  ocupation: string;
  interest: string[];
}

// Exercício 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o
// popule de acordo com suas informações.
const me: Human = {
  name: "Pedro",
  age: 27,
  ocupation: "Tattoo Artist",
  interest: ["drawing", "coding", "gaming"]
}

// Exercício 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
// retorne somente a lista de assuntos do objeto.

//Exercício 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
const listOfInterests = (person: Human): string[] => {
  return person.interest
}

// Exercício 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
enum SubjectsDev {
  Angular,
  Typescript,
  Git
}

// Exercício 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
interface Professors {
  name: string;
  subjects: SubjectsDev[];
}

// Exercício 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
// Nathan = Angular e Git, Alan = Angular, Typescript e Git
const alan: Professors = {
  name: 'Alan',
  subjects: [SubjectsDev.Angular, SubjectsDev.Typescript, SubjectsDev.Git]
}

const nathan: Professors = {
  name: 'Nathan',
  subjects: [SubjectsDev.Angular, SubjectsDev.Git]
}

// Exercício 8 - Declare e popule um array com os objetos do exercício 7.
const profArray: Professors[] = [alan, nathan]

// Exercício 9 - Faça uma função que receba um argumento de array de Professor
// e retorne um novo array de strings contendo somente os nomes dos professores.
const profAryToName = (prof: Professors) => prof.name
const profName = (prof: Professors[]): string[] => {
  return prof.map(profAryToName)
}
console.log(profName(profArray));

// Exercício 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
const profSubject = (prof: Professors[]): SubjectsDev[] => {
  return prof.map(p => p.subjects).reduce<SubjectsDev[]>((acc, subject) => {
    return acc.concat(subject)
  }, [])
}

//exercício 11 - Faça uma função que receba um argumento de array de Professores e
// retorne o primeiro Professor encontrado que dê aula de Typescript.
const findFirstProf = (prof: Professors[]): Professors | undefined => {
  return prof.find(p => p.subjects.includes(SubjectsDev.Typescript))
}
