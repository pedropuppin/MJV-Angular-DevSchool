// Uma Discriminated Union é criada através do uso de uma propriedade comum a todos os membros da união. Essa propriedade é
// conhecida como "discriminador" e é usada para determinar qual forma da união está sendo usada em um determinado momento.
interface Circle {
  type: 'circle';
  radius: number;
}

interface Square {
  type: 'square';
  width: number;
}

type Shape = Circle | Square;

const calculateArea =  (shape: Shape) => {
  switch (shape.type) {
    case 'circle': {
      return shape.radius * Math.PI * 2
    }
    case 'square': {
      return shape.width * shape.width
    }
  }
}

// ex2
interface Pizza {
  foodType: 'pizza';
  topping: string[];
  crust: string;
}

interface Sandwich {
  foodType: 'sandwich';
  topping: string[];
  bread: string;
}

type TypeOfFood = Pizza | Sandwich;

const orderFood = (food: TypeOfFood) => {
  if (food.foodType === 'pizza') {
    food.crust // food: Pizza
  } else {
    food.bread // food: Sandwich
  }
}

// ex3
interface SuccessState {
  success: true;
  people: string[];
}

interface FailureState {
  success: false;
  errorMessage: string;
}

type RequestState = SuccessState | FailureState;

const checkRequest = (req: RequestState) => {
  if (req.success) {
    console.log(req.people); // req: SuccessState
  } else {
    console.log(req.errorMessage); // req: FailureState
  }
}
