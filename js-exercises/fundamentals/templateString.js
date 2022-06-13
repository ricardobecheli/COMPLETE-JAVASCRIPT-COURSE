const ladysName = "Rebeca"
const concatenation = 'Hello ' + ladysName + "! " + "This is a regular concatenation"

// If there are more additions "it gets tyryng to make it this way" and "the code gets ugly".

/* Besides concatenating, template strings consider:
    line breaks, empty spaces, and tabs.
    Also:
    Variable names (mostly used), math operations and functions 
    (always inside ${}, which makes an interpolation).
     */

// Template strings start and end with backticks (or backquote) like this ` .

// So let's check TEMPLATE STRINGS:

const template = `
    Hello
    ${ladysName}, This is Template String.`

console.log(concatenation, template) // Will display both.

// Math example:

console.log(`1 + 1 = ${1+1}`)

// "There are some odd thing we can do with template strings. We'll see those later."