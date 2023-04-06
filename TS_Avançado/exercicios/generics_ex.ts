// refatore esses tipos utilizando um tipo genérico

export type ItemTexto = {
  valor: string;
}

export type ItemNumerico = {
  valor: number;
}

////////////////////////////////////////////////////////////////

type ItemGenerico<T> = {
  valor: T
}

type ItemNum = ItemGenerico<number>
type ItemText = ItemGenerico<string>
