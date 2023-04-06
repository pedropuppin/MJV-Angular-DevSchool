// MAPPED TYPES - são uma forma de criar um novo tipo baseado em um tipo existente, aplicando uma transformação a cada propriedade do tipo original.

type MappedType = {
  [K in 'prop1' | 'prop2']: K // o valor ': K' pode ser mudado para outro, só vai mudar o valor de prop1 e prop2
}

type Usuario = {
  name: string;
  age: number;
}

type UsuarioMapped = {
  [K in keyof Usuario]: Usuario[K];
}

type UsuarioModificado = {
  readonly [K in keyof Usuario]?: Usuario[K] | null;
}

type GenericMod<T> = {
  [K in keyof T]: T[K]
}

type UsuarioMapped2 = GenericMod<Usuario> // igual ao type da linha 12

type CustomMappedGenericProps<T> = {
  [K in keyof T as `get${Capitalize<Extract<K, string>>}`]: () => T[K]
}

type CustomMappedGenericPropsUser = CustomMappedGenericProps<Usuario>
