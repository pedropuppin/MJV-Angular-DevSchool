export interface GuestUser {
  type: 'guest';
  name: string;
}

export interface AuthenticatedUser {
  type: 'user';
  id: string;
  name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Crie uma função de type-guard que sirva para afunilar o tipo específico de User

const guestUser = (user: User): user is GuestUser => {
  return 'type' in user
}

const AuthenticatedUser = (user: User): user is AuthenticatedUser => {
  return 'type' in user
}

const testGuard = (user: User) => {
  if(guestUser(user)) {
    user
  } else {
    user
  }
}
