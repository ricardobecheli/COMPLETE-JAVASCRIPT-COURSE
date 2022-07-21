/*
https://www.w3schools.com/js/js_assignment.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

const a = 7 // When I tried to change "a", an error occourred because a is a CONSTANT!*
let b = 3
console.log("a = " + a, ", b = " + b)
console.log(`a = ${a}, b = ${b}`)

console.log(`a = ${a}, b = ${b}`)

b += a // b = b + a
console.log(a, b)
console.log(`a = ${a} and b = ${b} (the previous 3 +7 from a). This was made by the operator += `)

console.log("BLANK LINE 1")

b += a // The same again here: The previous "b=10" plus the const "a=7".
console.log(b)

console.log("BLANK LINE 2")

console.log("a += b" + " results in: TypeError: Assignment to constant variable." + " An error occourred because 'a' is a constant")

console.log("BLANK LINE 3")

b /= 2
console.log(b)

b *= 3
console.log(b)

b += .5
console.log(b)

b **= 2
console.log(b)

b %= 2 // b = b % 2 - Remembering: % gives us the remainder, the "left over" of a division.
console.log(b) // equals zero because b is even, now.

b += 10
console.log(b)