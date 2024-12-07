// there are two categories of data types; primitive and reference data types
// primitive data types refer to simple, fundamental data types, examples include; string, number, Bigint, boolean, undefined, null and symbol
// the refernence data types refer to the object data type

// STRING DECLARATION AND INITIALIZATION
// you can do this three ways, by: 
let favoriteFruit = 'strawberries';                   // using single quotes ''
let favoriteIceCream = "chocolate";                  // using double quotes "" 
let favoriteProgrammingLanguage = `JavaScript`      // using back ticks ``;

// NUMBER DECLARATION AND INITIALIZATION
// the number data type can take both integers and decimals
let numberOfDonuts = 12;
let pi = 3.14;

// BIGINT DECLARATION AND INITIALIZATION
let veryLargeNumber = 541523473493284n;

// BOOLEAN DECLARATION AND INITIALIZATION
let lovesCoding = true;

// undefined data type is given to variables that aren't initialized
let favoriteColor;
console.log(favoriteColor); // this will output undefined in the terminal

// we use null to explicitly clear the value of a variable 
favoriteIceCream = null;

// symbols are used to create unique identifiers
const uniquekey = Symbol();

// the reference data type AKA object data type, primitive data types can only contain one thing either a number, a text or boolean but objects have more complex structure 
// they hold key value pairs, enabling us to store more than one variable all in one e.g
let course = { // the curly braces defines an object literal
  name: 'Pluton', // name is a key
  hours: 3
}; // ends with a semicolon
// the object data types enables one to create more complex structures

// we an use the typeof operator in JS to in order to return the data type of the operand or variable
typeof course;
typeof favoriteIceCream; // it returns object
typeof uniquekey;
typeof "favoriteColor";
typeof lovesCoding;
typeof 10n;
  






