import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Pedro',
      email: 'puppin.pedro@gmail.com',
      password: '123123'
    },
    {
      id: 2,
      name: 'Victoria',
      email: 'victoria.pacini@gmail.com',
      password: '123123'
    },
    {
      id: 3,
      name: 'Nathan',
      email: 'nathan@gmail.com',
      password: '123123'
    }
  ]

  getUsers() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password)
  }

  constructor() { }
}


// gerado com "ng g s shared/services/users"
