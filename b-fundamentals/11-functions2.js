//Storing a FUNCTION (with no name) in a variable or a constant:

// A VARIABLE OR CONSTANT CAN RECEIVE A FUNCTION.

/*
JavaScript has seven built-in types:

null , undefined , boolean , number , string , OBJECT , and symbol.

FUNCTION ENTERS a variable or constant AS AN OBJECT.
*/

const printSum = function (a, b) {
    console.log(a + b)
}

printSum(2, 3)

// Storing an ARROW FUNCTION (a short form of a function - BUT NOT ONLY THAT*) in a constant:
// * will learn more about arrow functions later.

const sum = (a, b) => {
    return a + b
}

console.log(sum(4, 5))
console.log(sum(6, 7))

// IMPLICIT RETURN (still shorter form of arrow function)
// No braces means 1-sentence / 1-row funcion and that automatically returns* the output.
// * No "return" necessary, like in row 12 above.

const minus = (a, b) => a - b

console.log(minus(10, 20))


// In a funcion has only 1 parameter, the first parenteses are not required:

const print2 = a => console.log(a)
print2("Far out, man!")