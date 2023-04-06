// MIXIN - Uma função que recebe uma classe como argumento e retorna uma nova classe que combina o comportamento da classe de entrada
// com o comportamento adicionado pela função do mixin (Uma função que CRIA classes). É útil quando você deseja adicionar um comportamento
// a uma classe existente sem precisar modificar sua definição original.


// ex1
type Constructor<T = {}> = new (...args: any[]) => T; // tipo de função que cria uma classe. Nesse caso retorna um tipo T.

const identifiable = <TBase extends Constructor>(base: TBase) => { // mixin que recebe um construtor de classe TBase e retorna uma nova classe que estende TBase.
  return class extends base {
    id = Math.round(Math.random() * 99999999);
    //A nova classe tem uma propriedade id que é gerada aleatoriamente usando Math.random()
  }
}

const IdentifiableDate = identifiable(Date)
const identifiableDate = new IdentifiableDate()

// ex2
interface NodeTyped {
  type: string;
}

const chengeableType = <TBase extends Constructor<NodeTyped>>(base: TBase) => {
  return class extends base {
    setType(t: string) {
      this.type = t;
    }
    //adiciona a capacidade de alterar o valor do atributo type em qualquer classe que implemente a interface NodeTyped.
  }
}

// ex3
class Nodes<T extends string> implements NodeTyped {
  constructor (public readonly type: T) {

  }
}

const timeStampable = <TBase extends Constructor>(base: TBase) => {
  return class extends base {
    createdAt = new Date();
    updatedAt = new Date();

    setModified() {
      this.updatedAt = new Date();
    }
  }
}

const IdentifiableNodes = timeStampable(chengeableType(identifiable(Nodes)))

const idNode = new IdentifiableNodes("square")

idNode.type

// ex4
const createLoggerClass = () => { // função que cria classes
  return class MyLoggerClass {
    private completeLog: string = "";

    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }

    dumpLog() {
      return this.completeLog
    }
  }
}

const MyLogger = createLoggerClass();
const logger = new MyLogger();
logger.log("Hello World!");
console.log(logger.dumpLog());


const createSimpleDataBase = <T>() => { // o <T> é o genérico
  return class SimpleDatabase {
    private db: Record<string, T> = {}; // cria um tipo com um conjunto de propriedades do tipo string, indexado pelo tipo T.

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  }
}

const StringDatabase = createSimpleDataBase<string>();
const sdb1 = new StringDatabase();
sdb1.set("a", "Hello World");

type Cunstructor2<T> = new (...args: any[]) => T;

const Dumpable = <T extends Cunstructor2<{ getObject(): object; }>>(Base: T) => {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  }
}

// Função Dumpable que tem como input o Base que é do type T. O T tem um extends do Constructor2 que por sua vez também tem um input T que gera
// um um objeto do tipo T. Quando passamos "<{ getObject(): object; }>", falamos que o objeto PRECISA ter o gerObject(). Por isso que a linha (*) é
// valida, pq a class StringDatabase tem o método getObject()

const dumpableStringDataBase = Dumpable(StringDatabase) // * essa linha
const sdb2 = new dumpableStringDataBase();
sdb2.set("asd", "Hello asd");
sdb2.dump();
