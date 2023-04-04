"use strict";
// Exercício 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o
// popule de acordo com suas informações.
const me = {
    name: "Pedro",
    age: 27,
    ocupation: "Tattoo Artist",
    interest: ["drawing", "coding", "gaming"]
};
// Exercício 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
// retorne somente a lista de assuntos do objeto.
//Exercício 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
const listOfInterests = (person) => {
    return person.interest;
};
// Exercício 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
var SubjectsDev;
(function (SubjectsDev) {
    SubjectsDev[SubjectsDev["Angular"] = 0] = "Angular";
    SubjectsDev[SubjectsDev["Typescript"] = 1] = "Typescript";
    SubjectsDev[SubjectsDev["Git"] = 2] = "Git";
})(SubjectsDev || (SubjectsDev = {}));
// Exercício 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
// Nathan = Angular e Git, Alan = Angular, Typescript e Git
const alan = {
    name: 'Alan',
    subjects: [SubjectsDev.Angular, SubjectsDev.Typescript, SubjectsDev.Git]
};
const nathan = {
    name: 'Nathan',
    subjects: [SubjectsDev.Angular, SubjectsDev.Git]
};
// Exercício 8 - Declare e popule um array com os objetos do exercício 7.
const profArray = [alan, nathan];
// Exercício 9 - Faça uma função que receba um argumento de array de Professor
// e retorne um novo array de strings contendo somente os nomes dos professores.
const profAryToName = (prof) => prof.name;
const profName = (prof) => {
    return prof.map(profAryToName);
};
console.log(profName(profArray));
// Exercício 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
const profAryToSubject = (prof) => prof.subjects;
//exercício 11 - Faça uma função que receba um argumento de array de Professores e
// retorne o primeiro Professor encontrado que dê aula de Typescript.
