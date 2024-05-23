// Spread used to split  up array elements or objects properties.
// const newArray = [...oldArray, 1, 2];
// const newObject = { ...oldObject, newProp: 5 };
// // Rest operator => used to merge a list of function arguments into an array.
// function sortArgs(...args) {
//   return args.sort();
// }

// SPREAD OPERATOR
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: "Nick",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// REST OPERATOR
const filter = (...args) => {
  return args.filter((el) => el === 1); // === check for type and value equality
};

console.log(filter(1, 2, 3));
