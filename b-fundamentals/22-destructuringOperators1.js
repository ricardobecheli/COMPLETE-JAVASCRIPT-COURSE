 /* 
    I want to have access to 1 or more of these "internal" variables: nome, age, etc.
    But they're inside an object (this lesson) or an array (next lesson).

    You could say:

    - Easy. Just use the dot notation, as follows:

            let nome = person.nome
            const age = person.age

    Ok, that is the standard way.

    But now we're gonna use the destructuring operator, a simplified way to do the same.

    Note: person here is an OBJECT.
 */
const person = {
    nome: "Ana",
    age: 21,
    addressNr: 210,
    addressSt: "Av. Santo Amaro",
    courses: {
        engineering: 'undergraduate',
        chemistryGrade: 10,
        cooking: null
    }
}

console.log(person) // Object literals are displayed between braces.
console.table(person) // A table is displayed.

const { nome, age } = person
console.log(nome, age + " | in this row are both constants together in console.log") // Ana, 21
console.log(nome + " | and now, in this row, one at a time. Here only " + nome) // Ana
console.log(age + " | and now, in this row, one at a time. Here only " + age) // 21


const {nome: n, age: a} = person // I can change the const or let or var names.
console.log(n, a) // Ana, 21  | By changing the name, the "storage" place becomes more independent, detached, whatever, maybe avoiding confusion.

const { sobrenome, bemHumorada = true, outraConst = null} = person
// If I try to take an inexistent attribute from the object: Undefined or true. If you set it as true, it gets a "standard value" (- If there's nothing there, please assume true as a standard.).

console.log(sobrenome, bemHumorada, outraConst) // undefined true null
// Any other thing but undefined makes clear that someone has given prevoius attention to that constant or variable.

const {courses: {engineering, chemistryGrade, cooking, tvSetWhatever}} = person

console.log(engineering, chemistryGrade, cooking, tvSetWhatever)
// undergraduate 10 null undefined

/*
Note:
tvSetWhatever is undefined, not error, because it's inside an existent "parent" object variable or const.

If you try to extract
    const { f1, soccer } = games
Will resul in error, because there´s no "games" here.
*/