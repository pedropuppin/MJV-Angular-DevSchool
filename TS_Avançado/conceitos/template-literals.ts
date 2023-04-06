// TEMPLATE LITERALS - permitem a criação de tipos a partir de strings interpoladas (template strings), usando o caractere de crase ( `` ).
// É possível definir tipos que dependem de valores constantes ou de outros tipos, permitindo criar tipos complexos de maneira mais flexível e dinâmica.

// ex1
const Hello = "hello"
const World = "world"
const HelloWorld = `${Hello} ${World}` as const

type Hello = "hello"
type World = "world"
type HelloWorld = `${Hello} ${World}`

// ex2
type Icon = 'user' | 'www' | 'checkmark'
type Size = 'small' | 'medium' | 'large'
type IconSize = `${Icon}-${Size}`

// ex3
interface UserLiteral {
  id: number;
  name: string;
}

type UserChangedProps = `${keyof UserLiteral}Changed`

type UserChangedEvent = { // mapped-type
  [E in UserChangedProps]: Function
}

// ex 4

type UserChangedEvent2 = {
  [P in keyof UserLiteral as `${P}Changed`]: (value: UserLiteral[P]) => void;
}
// "keyof UserLiteral" retorna um tipo que é a união de todas as chaves em UserLiteral
// O "in" indica que estamos iterando sobre as chaves em "keyof UserLiteral"
// as "${P}Changed" é a sintaxe do template literal type, que concatena a chave "P" com a string "Changed".
// Cada valor no objeto é uma função que recebe um valor do tipo correspondente à chave em UserLiteral, ou seja, o valor do tipo "UserLiteral[P]".


// ex5 - UserChangedEvent GENÉRICO

type UserChangedEventGen<T> = {
  [P in keyof T as `${Extract<P, string>}Cganged`]: (value: T[P]) => void;
}
// como o keyof suporta mais tipos além de strings e o template literal só aceita strings, temos que usar o utility type "Extract"
// para limitar as propriedades de P para somente propriedades do tipo string

type UserChangedEvent3 = UserChangedEventGen<UserLiteral>


// ex6

type Trim<T extends string> = T extends ` ${infer T}` ? Trim<T> : T extends `${infer T} ` ? Trim<T> : T
//recebe um argumento que está limitado a uma string

type StringWithSpaces = "    hello    "
type RemovedSpaces = Trim<StringWithSpaces>
