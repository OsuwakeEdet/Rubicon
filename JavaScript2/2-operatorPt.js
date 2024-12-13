let programmingLanguage = 'JavaScript';
// the equal to sign isn't to check for equality. it's a distinction to asssign a variable

// comparison operators, they are:
// > greater than
// < less than
// >= greater than or equal to 
// < less than or equal to 

// the result of a comparison is a boolean value

let num1 = 14;
let num2 = 10;

const isNum1GreaterThanOrEqualTo = num1 >= num2;
console.log(isNum1GreaterThanOrEqualTo);

const isNum1LessThanOrEqualTo = num1 <= num2;
console.log(isNum1LessThanOrEqualTo);

// Equity operator 
// use == for loose equality
// use === for strict equality
let a = 2;
let b = '2';
console.log(a == b); // it converted the two to string and then compared, strict equality doesn't
console.log(a === b);