// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.

const mergeObject = <T, K>(obj1: T, obj2: K): T & K => {
  return {...obj1, ...obj2};
}

const myObj1 = {
  name: 'pedro'
}

const myObj2 = {
  age: 27
}

const mergedObjs = mergeObject(myObj1, myObj2)
