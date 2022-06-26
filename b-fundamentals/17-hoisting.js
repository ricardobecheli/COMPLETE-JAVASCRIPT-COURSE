/*
The natural code readind of  language happens from top to bottom.
It does nor happen in JavaScript when VAR is used.
Var can be picked up/thrown upwards = HOISTED from wherever it is by the language interpreter.
THIS IS JUST A TEACHING CURIOSITY.
THERE IS NO REASON AT ALL TO DO THIS IN NORMAL PROGRAMMING.
*/

console.log("a = ", a)
// a is not declared yet! That would be a problem in many other lnguages.
// Hoisted here means: CREATED but not declared. Displays: UNDEFINED.

var a = 2 // Now it's declared. Displays: 2
console.log("a = ", a)

// The same would happen in a function:

function teste() {
    console.log("a now in a function = ", a)
    var a = 2 
    console.log("a  now in a function= ", a)
}

teste()
console.log("a  FUNCTION CALLED now in a function THE SAME HAPPENS = ", a)