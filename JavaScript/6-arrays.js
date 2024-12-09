// Arrays are a data structure used to store a list of data, we use square bracket to create an array literal 
let productColors = ['blue', 'green', 'yellow', 'white', 'black', 'red', 'orange', 'indigo', 'violet'];
console.log(productColors);

// we can use bracket notation and get an element of the array by the index
// due to something called zero based indexing the first element is zero, the second is one, third is two and so on 
console.log(productColors[0]); // outputs blue
console.log(productColors[1]); // outputs green
console.log(productColors[2]); // outputs yellow
console.log(productColors[3]); // outputs white
console.log(productColors[4]); // outputs black

productColors[0] = "brown"; // outputs brown in place of blue
console.log(productColors.length); // outputs the number of elements in an array



