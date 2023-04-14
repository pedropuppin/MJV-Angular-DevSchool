const { Observable } = require("rxjs")
const { map } = require("rxjs/operators");

const users = {
  data: [
    {
      id: 1,
      status: "active",
      age: 14,
    },
    {
      id: 2,
      status: "inactive",
      age: 12,
    },
    {
      id: 3,
      status: "active",
      age: 42,
    },
    {
      id: 4,
      status: "inactive",
      age: 42,
    },
    {
      id: 5,
      status: "active",
      age: 13,
    },
    {
      id: 6,
      status: "inactive",
      age: 75,
    },
    {
      id: 7,
      status: "inactive",
      age: 43,
    },
    {
      id: 8,
      status: "inactive",
      age: 54,
    },
    {
      id: 9,
      status: "active",
      age: 7,
    },
    {
      id: 10,
      status: "active",
      age: 10,
    },
  ],
};

const users2 = {
  data: [
    {
      id: 1,
      status: "active",
      age: 14,
    },
    {
      id: 2,
      status: "inactive",
      age: 12,
    },
    {
      id: 3,
      status: "active",
      age: 42,
    },
    {
      id: 4,
      status: "inactive",
      age: 42,
    },
    {
      id: 5,
      status: "active",
      age: 13,
    },
    {
      id: 6,
      status: "inactive",
      age: 75,
    },
    {
      id: 7,
      status: "inactive",
      age: 43,
    },
    {
      id: 8,
      status: "inactive",
      age: 54,
    },
    {
      id: 9,
      status: "active",
      age: 7,
    },
    {
      id: 10,
      status: "active",
      age: 17,
    },
  ],
};



// OBSERVABLE --> o Observable fornece os dados. Pede fornecer multipos dados diferentes

const observable = new Observable((subscriber) => { // instancia uma nova classe Observable que recebe um parametro "subscriber"
  subscriber.next(users2);
  subscriber.next(users);
}).pipe( // .pipe faz com que os dado passem pelos OPERATORS dentro do pipe antes de irem para o oserver
  map((value) => {
    // console.log('1 - recebeu dados do observable', value);
    return value.data
  }),
  map((value) => {
    // console.log('2 - recebeu dados do primeiro operator', value);
    return value.filter(users => users.status === "active")
  }),
  map((value) => {
    // console.log('3 - recebeu dados do segundo operator', value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    // console.log('4 - recebeu dados do terceiro operator', value);
    if (value < 18)
      throw new Error('Average age is to young');
    else return value
  })
);

// OPERATORS --> é interessante limitar o que cada operator faz a uma única tarefa, por exemplo, o primeiro map é apenas responsável
// por extrair a array "data" de dentro do users e passar para o próximo operator. Sempre o último operator do pipe que manda
// o dado tratado para o observer.




// OBSERVER --> o Observer é responsavel por lidar com os dados depois que eles saem do pipe-line (fazer algo com o dado, lidar com erros que pssam ter
// ocorrido no pipe, etc)

const observer = {
  // cenário onde tudo dá certo e podemos processar o dado
  next: (value) => {
    console.log('observer got a value of ' + value);
  },
  // cenário do erro
  error: (err) => {
    console.log('observer got an error: ' + err);
  },
  complete: () => {
    console.log('observer got a complete notification');
  }
}

observable.subscribe(observer);
