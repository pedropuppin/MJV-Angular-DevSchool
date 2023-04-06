// TUPLAS - são arrays tipadas com tamanho pre-definido e tipos para cada index. São úteis pq permitem cada elemento da array ter um tipo específico de valor

type PairString = [string, string]
type PairStringNumber = [string, number]

type GenericPair<T1, T2> = [typeOne: T1, typeTwo: T2]
type PairStringNumber2 = GenericPair<string, number> // mesma tupla da linha 3 só que com as lables typeOne e typeTwo

type Triple<T1, T2, T3> = [T1, T2, T3]
const tripleStrings: Triple<string, string, number> = ['', '', 2]

type StringThanNumber = [...string[], number] // '...' rest parameter - usado para representar um número variável de elementos
const stringThanNumber: StringThanNumber = ['a', 'b', 'c', 2]

type ReadOnlyTuple = readonly [string, number] // gera um array imutável, não pode alterar os valores
