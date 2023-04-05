// NARROWING - pega um valor que pode ser de multiplos tipos e afunila pra um tipo exato (útil para trabalhar com unions que juntam diversos tipos)
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
interface StandardUser {
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


// type predicates -  é uma função que retorna um valor booleano e informa ao compilador se um determinado valor atende a um determinado tipo.
// É útil em situações em que você precisa verificar se um objeto atende a um determinado tipo em tempo de execução, mas quer garantir que o
// TypeScript trate o objeto como o tipo correto durante a compilação.
interface Animal {
  nome: string;
  especie: string;
}

const ehAnimal = (obj: any): obj is Animal => { //type predicate
  return 'nome' in obj && 'especie' in obj;
}
// O predicado 'obj is Animal' garante que quando a função retorna true, a variável que foi passada como argumento foi avaliada como sendo do tipo Animal.

const imprimeNomeAnimal = (animal: unknown) => {
  if (ehAnimal(animal)) {
    console.log(animal.nome);
  } else {
    console.log('Não é um animal!');
  }
}

// Exhaustive check
const exhaustiveCheck = (x: number | string) => {
  switch (typeof x) {
    case "string": {
      x
      break;
    }
    case "number": {
      x
      break;
    }
    default: {
      x
    }
  }
}
