/*
FUNCTION is:    Top, nr 1, "president" in JS  - according to teacher.
OBJECT is:      nr 2, "vice-president" in JS    - according to teacher.
*/

// Curiosities About Function and Object:


// 1)First example:

console.log(typeof Object)      // function

console.log(typeof new Object())  // object (an object created FROM a function).
// The pink inner parentheses in VS Code - after new Object - are optional.
// About "new": (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). ["For convenience, let's call it newInstance..." MDN]


console.log("BLANK ROW 1")



// 2) User defined function doing the same thing:

const Cliente = function() {}
console.log(typeof Cliente)     // function (Compare to first example above; Same display.)

console.log(typeof new Cliente) // object (Compare to first example above; Same display.)


console.log("BLANK ROW 2")



// 3) The same for CLASS*
/*      * class in JS is a "syntax sugar".
        "In computer science, syntactic sugar is syntax within a programming language that is
        designed to make things EASIER to read or to express."
        https://pt.wikipedia.org/wiki/A%C3%A7%C3%BAcar_sint%C3%A1tico.
*/ 

class Produto {}
console.log(typeof Produto)     // function (Compare to examples above; Same display.)
console.log(typeof new Produto) // object (Same as above examples, WITHOUT THE OPTIONALPARENTHESES.
