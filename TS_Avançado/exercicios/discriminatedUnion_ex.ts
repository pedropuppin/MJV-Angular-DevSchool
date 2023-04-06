// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
export type User = {
  name: string;
  email?: string;
  registered: boolean;
}

////////////////////////////////////////////////////////////////

type RegisteredUser = {
  name: string;
  email: string;
  registered: true;
}

type NotRegisteredUser = {
  name: string;
  registered: false;
}

type BetterUser = RegisteredUser | NotRegisteredUser

const testUser = (user: BetterUser) => {
  if(user.registered === true) {
    user.email // acessa o email
  } else {
    user.name // não acessa o email
  }
}
