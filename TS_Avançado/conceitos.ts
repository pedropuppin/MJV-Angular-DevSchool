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


// 3 -> INDEXED-ACCESS - acessa o tipo de uma propriedade através do index
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


// 4 -> INDEXED-SIGNATURE - permite tipar um objeto sem saber o nome das propriedades, mas sabendo o tipo de valor delas
interface CacheById{
  [id: string]: any;
}

const cache: CacheById = {
  'abc': 'alan',
  'dfg ': 'nathan'
}

type PersonType = "professor" | "student" | "admin"

type CacheByUnion = {
  [P in PersonType]: any; // iteração pelos tipos da union de PersonType -> "mapped type"
}

const cacheByUnion: CacheByUnion = {
  admin: "abc",
  professor: 123,
  student: {}
}


// 5 -> NARROWING - pega um valor que pode ser de multiplos tipos e afunila pra um tipo exato (útil para trabalhar com unions que juntam diversos tipos)
const truthinessStringCheck = (x: string | null | undefined) => {
  if (x){
    x // string
  } else {
    x // string ( "" ) | null | undefined
  }
}

const truthinessNumberCheck = (x: number | null | undefined) => {
  if (x){
    x // number
  } else {
    x // 0 | null | undefined
  }
}

const equalityCheck = (x: "a" | "b" | null) => {
  if (x === "a"){
    x // a
  } else if (x === "b") {
    x // b
  } else {
    x //null
  }
}

//in check 1
const inCheck = (x: any[] | object) => {
  if ("length" in x) {
    x // any[]
  } else {
    x // object
  }
}

//in check 2
type StandardUser = {
  name: string;
  sessionId: number;
}

type AdminUser = StandardUser & {
  isAdmin: true,
  access: "read-admin" | "write-admin"
}

const login = (user: StandardUser | AdminUser) => {
  if ('isAdmin' in user) {
    user // type "AdminUser"
  }
  user // type "StandardUser | AdminUser"
}

class User {}
const instanceOfCheck = (x: User | string) => {
  //verifica se x possui User na sua cadeia de prototype
  if (x instanceof User) {
    x // User
  } else {
    x // string
  }
}

// type predicates
