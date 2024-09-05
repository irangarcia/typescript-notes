/* 
  Make all properties in Person readonly
*/

interface Person {
    name: string,
    age: number
};

const person: Person = {
    name: 'John', 
    age: 22
};

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
};

function freeze<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj)
};

const newPerson = freeze(person); // MyReadonly<Person> 