// UTILITY TYPES -  são tipos genéricos predefinidos no TypeScript que nos permitem manipular outros tipos de forma mais fácil e conveniente.
interface User {
  id: number | null; // null - representa um valor nulo
  name: string;
  email?: string;
}


type PartialUser = Partial<User> // transforma o tipo User em um tipo em que todas as suas propriedades são opcionais.

type RequiredUser = Required<User> // transforma o tipo User em um tipo em que todas as suas propriedades são obrigatórias.

type ReadonlydUser = Readonly<User> // transforma o tipo User em um tipo em que todas as suas propriedades são somente leitura.

type PickUserName = Pick<User, 'id' | 'name'> // transforma o tipo User em um tipo somente com as propriedades selecionadas.

type OmitUser = Omit<User, 'name'> // cria um tipo contendo todas as propriedades de User, exceto 'name'. (faz o contrario de pick)

type ExcludeUser = Exclude<keyof User, 'name'> // cria um tipo contendo todos os membros de User que não são 'name'.

type ExtractUser = Extract<User | null, User> // cria um tipo contendo todos os membros de "User | null" que são também membros de User.

type RecordUser = Record<string, User> // cria um tipo com um conjunto de propriedades do tipo string, indexado pelo tipo User.

type NonNullableUserId = NonNullable<User['id']> //  cria um tipo que remove null e undefined de 'id'


// UTILITY TYPES PARA FUNÇÕES
const createUser = (name: string, id: number): User => {
  return {
    id: id,
    name: name
  }
}

type ParametersCreateUser = Parameters<typeof createUser> // Extrai o tipo dos parâmetros de uma função como uma tupla de tipos

type ReturnTypeCreateUser = ReturnType<typeof createUser> // Extrai o tipo de retorno de uma função.


// UTILITY TYPES PARA CLASSES
class Professor {
  constructor (public name: string, public age: number) {}
}

type ConstructorParametersUser = ConstructorParameters<typeof Professor> // Extrai o tipo dos parâmetros do construtor de uma classe como uma tupla de tipos.

type InstanceTypeUser = InstanceType<typeof Professor> // extrai o tipo da instância de um objeto criado a partir de uma classe.


// UTILITY TYPES PARA STRINGS LITERAIS
type PedroLiteral = 'Pedro'

type ToUpercasePedro = Uppercase<PedroLiteral>
type ToLowercasePedro = Lowercase<PedroLiteral>
type CapitalizePedro = Capitalize<PedroLiteral>
type UnCapitalizePedro = Uncapitalize<PedroLiteral>
