// INDEXED-SIGNATURE - permite tipar um objeto sem saber o nome das propriedades, mas sabendo o tipo de valor delas
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
