// functions are a building blick o our programs, they perform some action and calculate and return a value
// not all function explicitly require the return keyword
// if we don't supply the explicit return keyword, Javascript will have the function return the value undefined

function multiply(num1, num2) {
    return num1 * num2;
}

console.log( multiply(2, 34) ); 


function beMultiplied(num1, num2) {
    const perform =  num1 * num2;
}

console.log( beMultiplied(2, 34) ); 