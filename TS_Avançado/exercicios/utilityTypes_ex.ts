// Usando os tipos utilitários, substitua a implementação dos tipos usados pelas funções derivando do tipo User

export type User = {
  id: number;
  name: string;
  email: string;
}

// a função de createUser não precisa da propriedade "id", remova ela do tipo UserSemId derivando ela a partir do tipo User.
export type UserSemId = {
  name: string;
  email: string;
};

export function createUser(user: UserSemId) {
  // .... nada a fazer aqui, só exemplificando um caso de uso
}

type UserNoId = Omit<User, 'id'>
const betterCreateUser = (user: UserNoId) => {}



// a função update precisa do id do usuário e quaisquer outras propriedades para atualizar o usuário
export type UserComIdMasRestoOpcional = {
  id: number;
  name?: string;
  email?: string;
};

export function updateUser(user: UserComIdMasRestoOpcional) {
  // .... nada a fazer aqui, só exemplificando um caso de uso
}

type UserIdWithOptional = Pick<User, 'id'> & Partial<Omit<User, 'id'>>
const betterUpdateUser = (user: UserIdWithOptional) => {}



// Somente a propriedade name
export type UserName = {
  name: string;
}

export function getUserName(user: UserName): string {
  return user.name;
}

type OnlyName = Pick<User, 'name'>
const betterGetUserName = (user: OnlyName): string => {
  return user.name;
}
