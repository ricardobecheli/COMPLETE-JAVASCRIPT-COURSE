//Storing a FUNCTION in a variable or a constant:

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
// No braces means 1-sentence / 1-line funcion and that automatically returns* the output.
// * No "return" necessary, like in row 12 above.

const minus = (a, b) => a - b

console.log(minus(10, 20))