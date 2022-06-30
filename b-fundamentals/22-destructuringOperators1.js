 /* 
    I want to have access to 1 or more of these "internal" variables: nome, age, etc.
    But they're inside an object (this lesson) or an array (next lesson).

    You could say:

    - Easy. Just use the dot notation, as follows:

            let nome = person.nome
            const age = person.age

    Ok, that is the standard way.

    But now we're gonna use the destructuring operator, a simplified way to do the same.
 */
const person = {
    nome: "Ana",
    age: 21,
    addressNr: 210,
    addressSt: "Av. Santo Amaro"
}

console.log(person) // Object literals are displayed between braces.
console.table(person) // A table is displayed.

const { nome, age } = person
console.log(nome, age) // Ana, 21


const {nome: n, age: a} = person
console.log(n, a) // Ana, 21

const { sobrenome, bemHumorada = true} = person
console.log(sobrenome, bemHumorada) // undefined true
