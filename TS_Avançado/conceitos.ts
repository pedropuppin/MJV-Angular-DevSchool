// KEYOF - takes an object type and produces a string or numeric literal union of its keys
interface Professor {
  name: string;
  age: number;
}

type ProfessorProperties = keyof Professor // name | age
const professorProperties: ProfessorProperties = 'name'


// ITERSECTION - combine different types of objects (the difference between intersection and union is that the intersection MUST contain all the properties defined in both types)
interface Point {
  x: number;
  y: number;
}

type Named = {
  name: string;
}

type NamedPoint = Point & Named
const namedPoint: NamedPoint = { // if you take a property out it generates a compile error
  name: 'Named Point',
  x: 12,
  y: 13
}


// INDEX-ACCESS - access the type of a property through it's index
interface CourseSubject {
  id: number;
  name: string;
}

interface Professor {
  name: string;
  age: number;
  subjects: CourseSubject[];
}

type ProfessorName = Professor['name'] // string
type ProfessorCourseSubject = Professor['subjects'] // CourseSubject[]
type ProfessorCourseSubjectId = Professor['subjects'][number]['id'] // number
type ProfessorNameAge = Professor['name' | 'age'] // string | number
type ProfessorProperty = Professor[keyof Professor] // string | number | CourseSubject[]
