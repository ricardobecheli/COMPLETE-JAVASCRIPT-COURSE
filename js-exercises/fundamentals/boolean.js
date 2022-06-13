//What, in JS, result in true or false?

let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)


isActive = 1 // How to make it behave as boolean instead of number? 2 negatives !!
// ! = not true; 
// !! = not not true 
console.log(isActive) // displays as number
console.log(!!isActive) // displays as boolean TRUE
console.log(!isActive)  // displays as boolean FALSE with 1 negative


// TYPES THAT WILL BEHAVE AS BOOLEAN WHEN REQUIRED:

console.log('will behave, or "will resolve to", - in JavaScript - as TRUE ones:')

    console.log(!!3)
    console.log(!!-1)
    console.log(!!' ')          // Empty space string
    console.log(!!'something') // Or a "filled" string
    console.log(!![]) // An array - even an empty one would represent true.
    console.log(!!{}) // A literal object.
    console.log(!!Infinity) // division by zero = Infinity
    console.log(!!(isActive = true))



console.log('will behave, or "will resolve to", - in JavaScript - as FALSE ones:')

    console.log(!!0)
    console.log(!!'')
    console.log(!!null)
    console.log(!!NaN)
    console.log(!!undefined)
    console.log(!!(isActive = false))


console.log('to finish... two bars || Means the logic OR, Meaning at least ONE MUST be true')

    console.log(!!("" || null || 0 || " ")) // The empty space srting is true.

    console.log(("" || null || 0 || "ops! I'm true.")) // Without the !!, it will return the first true value found.


let race = ''
console.log(race || 'Monaco')
    /* That means: display the variable race.
    If its value is not filled - NOT VALID, NOT TRUE -  fill it with Monaco.*/


race = 'Interlagos'
console.log(race || 'Monaco')
    // But if the string is filled - IS VALID, IS TRUE -  the filled will be displayed.

//THAT'S WHY (among other things) MANY PEOPLE FIND JS VERY STRANGE...
// It's very common in JS.