"use strict";
let boolean = false;
let string = "abc";
const soma = (x, y) => x + y;
const sum = (x, y) => x + y;
const muitiply = (x, y) => x * y;
const division = (x, y) => x / y;
//especiais
let any;
let unknown;
let never;
let object;
const person = {
    name: "Alan",
    age: 32,
    isProfessor: true
};
const car = {
    color: "black",
    year: 2010
};
//tipagem de arrays
const professores = ["Alan", "Nathan"];
const professoresV2 = ["Alan", "Nathan"];
// enum (define a set of named constants)
var PersonType;
(function (PersonType) {
    PersonType[PersonType["Aluno"] = 0] = "Aluno";
    PersonType[PersonType["Professor"] = 1] = "Professor";
})(PersonType || (PersonType = {}));
const aluno = PersonType.Aluno;
const professor = PersonType.Professor;
const schoolStudent = {
    type: PersonType.Aluno
};
let stringOrBoo = "abc"; //accepts booleans and strings
const check = (userOrClassroom) => userOrClassroom.id;
//Tipos literais (usefull when used with unions. Work similar as an enum)
const a = "a"; // const a has a type of "a"
const positivo = true; // type of true
const pedro = {
    name: "pedro",
    student: true
};
//Classes
class UserDevSchool {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.getNameUppercase = () => {
            return this.name.toUpperCase();
        };
    }
}
class Professor extends UserDevSchool {
    constructor(id, name, materias) {
        super(id, name);
        this.materias = materias;
    }
}
const prof = new Professor("123", "Alan", ["typescript"]); //professor instance (it has a type of professor)
// const test = (user: Professor) => {
//   user.
// }
