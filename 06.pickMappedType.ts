/* 
  Pick the key that you want to use
*/

interface Person {
    name: string;
    age: number;
    address: {}
};

type MyPick<T, K extends keyof T> = {
    // If P exists in K
    [P in K]: T[P]
}
 
const person: MyPick<Person, 'name' | 'age'> = {
    name: 'John', 
    age: 22
};