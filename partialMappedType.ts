/* 
  Make all properties in Person optional
*/

interface Person {
    name: string;
    age: number;
};

// The +? makes optional
type MyPartial<T> = {
    [K in keyof T]+?: T[K]
};


function update(person: Person, prop: Partial<Person>) {
    return {...person, ...prop}
}

const person: Person = {
    name: 'John', 
    age: 22
};

update(person, {name: 'A'})