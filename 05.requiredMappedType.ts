/* 
  Make all properties in Person required
*/

interface Person {
    name: string;
    age?: number;
};

// The -? remove the optional 
type MyRequired<T> = {
    [K in keyof T]-?: T[K]
};

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age}`
};

const person: Required<Person> = {
    name: 'John', 
    age: 22,
};

const age = printAge(person); //
