// 1 -> KEYOF - takes an object type and produces a string or numeric literal UNION of its keys
interface Professor {
  name: string;
  age: number;
}

type ProfessorProperties = keyof Professor // name | age
const professorProperties: ProfessorProperties = 'name'


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
