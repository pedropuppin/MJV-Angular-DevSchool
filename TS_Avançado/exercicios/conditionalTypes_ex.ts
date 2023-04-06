// Crie uma função que aceita um argumento e retorna true se o argumento for um array, ou false caso não seja.
// Coloque a tipagem para que o Typescript consiga automaticamente entender esse retorno
// Dica: utilize um parâmetro de tipo para receber o tipo do argumento
const arrayOrNot = <T>(arg: T): T extends Array<any> ? true : false => {
  return Array.isArray(arg) as any
}

const test: any[] = []
const isArray = arrayOrNot(test)


// No trecho de código "Array<any>", o uso do any indica que não há restrições quanto ao tipo de elemento que
// pode estar presente no array. Isso permite que a função "arrayOrNot" aceite um argumento de qualquer tipo
// de array, independentemente do tipo de seus elementos.


// Por padrão, o TypeScript infere que o valor retornado pela função é do tipo "true | false", que é um tipo de união.
// Mas, a expressão Array.isArray(arg) retorna um valor do tipo boolean, e não true ou false diretamente.
// Por isso, é necessário converter o valor retornado para o tipo correto usando as any. Isso informa ao compilador
// do TypeScript para ignorar o tipo inferido e considerar o valor retornado como sendo do tipo true ou false.
