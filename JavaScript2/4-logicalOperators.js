// we use logical operators to make decisions based on multiple operators
// there are four logical operators -

// || (or operators) Returns true if at least one operand is true.
// && (and operators) Returns true if both operands are true.
// ! (not operators) Reverses the truth value of the operand.
// ?? (null coalescing) Returns the right-hand value if the left-hand value is null or undefined.

console.log(true || true); // returns true
console.log(true || false); // returns true (because one is true)
console.log(false || true); // returns true (because one is true)
console.log(false || false); // returns false

let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = console.log(hasReservation || acceptingWalkIns);
console.log(hasAccessToTable);

console.log(true && true); // returns true (both are true)
console.log(true && false); // returns false
console.log(false && true); // returns false
console.log(false && false); // returns false

let age = 16;
let hasCar = true;
const canDrive = age >= 16 && hasCar;
console.log(canDrive);

let a = true,
  b = true,
  c = true,
  d = true;
console.log((a && b) || (c && d));
console.log(a && b) || (c && d);
