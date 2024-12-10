// Function is the building block of our code, it alows us to group statements perform a task or calculate and return a value
function sayHello() {
  console.log("Hello!");
}

sayHello();

// you can add a parametic variable

function sayHi(name) {
  // Template literals use backticks (`) to create strings. Inside them, ${} lets you embed variables or expressions
  // They are more convenient than string concatenation. Without template literals, you'd write the same code like this:
  // console.log("Hi, " + name);

  console.log("Hi, ${name}"); //
}

sayHi("Steven");

