// CONDITIONAL TYPES - são tipos condicionais que permitem que você escolha tipos diferentes com base em condições booleanas em tempo de compilação.
// Eles são muito úteis para criar tipos que mudam dinamicamente com base em outras informações de tipos.



// 1 - remoção de tipos de uma união

type RemoveStringAndNumber<T> = T extends string | number ? never : T; // verifica se T faz parte da união "string | number" se fizer retorna never se não retorna T
// o NEVER representa um valor que nunca ocorre

type RemoveTest = string | number | boolean | string[] | null;

type Removed = RemoveStringAndNumber<RemoveTest>; // boolean | string[] | null



// 2 - inferencia de tipo dentro de um tipo desconhecido

type UnpackArray<T> = T extends Array<infer A> ? A : never;
// infer -> se T for uma matriz (ou um tipo que pode ser convertido em uma matriz), então A será definido como o tipo dos elementos da matriz T

type Unpacked = UnpackArray<number[]>
type Unpacked2 = UnpackArray<number>
type Unpacked3 = UnpackArray<any>
type Unpacked4 = UnpackArray<unknown>



// 3 - recursividade

//array genérico aninhado
const ary: number[][] = [[1, 2], [3, 4], [5, 6]];

// desempacota recursivamente arrays genéricos aninhados.
type UnpackArrayRecursive<T> = T extends Array<infer A> ? A extends Array<any> ? UnpackArrayRecursive<A> : A : never
// "T extends Array<infer A>" -> verifica se o tipo T é um array
// Se for, a palavra-chave infer é usada para extrair o tipo do elemento do array, que é atribuído à variável A.
// "A extends Array<any> ? UnpackArrayRecursive<A> : A" -> verificação adicional
// Se A for um array, a expressão será avaliada recursivamente usando "UnpackArrayRecursive<A>". Caso contrário, A será retornado diretamente.

type Unpacked5 = UnpackArray<number[][][][]>
type UnpackTest = UnpackArrayRecursive<Unpacked5>



// 4 - Funções com retorno variável

// **
// **
const createId = (numeric: boolean): string | number => {
  const id = Math.floor(Math.random() * 99999)
  if (numeric) {
    return id;
  }
  return id.toString();
}

const idString = createId(false)
const idNumber = createId(true)
// não funciona desta maneira, teria que adicionar:
// const createId = (numeric: false): string **
// const createId = (numeric: true): number **
// ou usar a condicional:

const createIdConditional = <T extends boolean>(numeric: T): T extends true ? number : string => {
  const id = Math.floor(Math.random() * 99999)
  if (numeric) {
    return id as any; // cast forçado a "any" devido a limitação do compilador
  }
  return id.toString() as any;
}

const idString2 = createIdConditional(false)
const idNumber2 = createIdConditional(true)



// OBS: muitos dos utility types são implementados a partir de conditinal types
