const person = {
    name: 'Kawi', 
    age: 22,
};

type Person = typeof person; // object
type PersonKeys = keyof Person; // 'name' | 'age'
type PersonPrimitiveTypes = Person[PersonKeys] // string | number 

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
};

const personName = getProperty(person, 'name');