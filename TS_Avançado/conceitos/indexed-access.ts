// INDEXED-ACCESS - acessa o tipo de uma propriedade através do index
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
