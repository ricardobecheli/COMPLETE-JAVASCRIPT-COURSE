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
