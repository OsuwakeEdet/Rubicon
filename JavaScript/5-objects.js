// Objects are refernence tyoes in JavaScript, they are used to represent real objects or noun in real life

// Key: A string (or symbol) that serves as the unique identifier.
// Value: Any data type (e.g., string, number, array, object, function, etc.) associated with the key.

// EXAMPLE;
// const user = {
//   name: "Emana",
//   age: 21,
//   isStudent: true
// };

// Key: "name", "age", "isStudent"
// Value: "Emana", 21, true


let course = {
name: 'Rubicon',
owner: 'Emana',
Goal: 'JavaScript Developer'
};

console.log(course);
// the key-value pair
// e.g (in line 18 of this file, name: 'Rubicon')
// is called a propery of the object 'course' declared in line 17

// Accessing Key-Value Pair
// you can access key pairs in an object using two differrent notation:
// 1. DOT NOTATION 👇
console.log(course.name); // this outputs the value of the key called name
course.name = "JavaScript Fundamentals"; // this changes the value of the name key 

// 2. BRACKET NOTATION
console.log(course['name']); // this outputs the value of the key called name
course['name'] = "JavaScript 101";
console.log(course['name']);

let identity = "name";
console.log(course['identity']); // since identity is assigned to name, JavaScript sees it as console.log(course['name']), because identity = "name";












