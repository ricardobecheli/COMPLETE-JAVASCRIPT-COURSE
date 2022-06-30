// OBJECTS ARE NESTED GROUPS OF:

// Pair Name&Value or
// Pair Chave&Value or
// Pair identifier and its value

const greeting = 'Hello!' // VARIABLE. | Lexical scope or context 1. Literal object creation.

console.log(greeting) // displays Hello!
// greeting (is the variable NAME or variable KEY or variable IDENTIFIER)
// Hello! (is the variable value)


console.log("BLANK ROW 1")


function exec() {
    const greeting = "What's up!"  // FUNCTION. | Lexical scope or context 2.
    return greeting
}
console.log(exec())  // displays "What's up!"


console.log("BLANK ROW 2")


const Client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    address: {
        street: 'Sesame St.',
        number: 0,
        age: "just to show that if nested, it does not conflict wi the prevoiusly named."
    }
}
console.log(Client)  // NESTED. | Lexical scope or context 3.


console.log("BLANK ROW 3")


let dataClient = {
    name: 'Pedro',
    age: 32,
    weight: 90,
}
console.table(dataClient) /// LOOK AT THAT!!! console.table