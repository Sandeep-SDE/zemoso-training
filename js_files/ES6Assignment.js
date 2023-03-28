
//Refactor the following function into a one-liner:

/**
 * 
        const printName = (name) => {
              return “Hi” + name;
           }
 */
const printName = (name) => "Hi" + name;
console.log(printName("sandeep"));

//Rewrite the following code using template literals

/**
 *  const printBill = (name, bill) => {
    return “Hi “ + name + “, please pay: “ + bill;
}
 */

const printBill = (name, bill) => `Hi${name}, please pay: ${bill}`;
console.log(printBill("sandeep",5170));

//Modify the following code such that the object properties are destructured and logged.

/**
 * const person = {
    name: “Noam Chomsky”,
    age: 92
}
 */

const person = {
    name: "Noam Chomsky",
    age: 92
}

/*let name = person.name; // without destructuring 
let age = person.age;*/
const { name, age } = person;
console.log(name);
console.log(age);

