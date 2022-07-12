//DESTRUCTURING IN ARRAYS

/*
            Remembering how an array is MADE:
            const notasMensais = [7.7, 8.9, 6.3, 9.2]
            four positions in this array: from zero to 3.
*/


/*  - in "[a]" here I'm using the brackets to DESTRUCTURE not to build.
    - Just created a a variable "a" that received "10"... wait a second!!!
    
    THIS TEACHER'S LESSON IS VERY CONFUSED 
    BECAUSE HE MIXED SEVERAL CONCEPTS BESIDES DESTRUCTURING, AT THE SAME TIME.
    A TOTAL MESS (at least for a first timer like me)!
    SO WATCH THESE VIDEOS FIRST:
    1) https://www.youtube.com/watch?v=NIq3qLaHCIs
    2) https://www.youtube.com/watch?v=rpYg2M2lNAE
    3) https://www.youtube.com/watch?v=fsybVOVcNg0
*/


// START FROM VIDEO 1 ABOVE:

const alphabet = ["A", "B", "C", "D", "E", "F"]

// Formerly we would do: 
// const alpha = alphabet[0]
// const beta = alphabet[1]
// and so on

/*
    but now its like that:
            const [alpha, beta] = alphabet
    
    You can give any (not reserved) name
    and they will follow the array's elements order.

            console.log(alpha) will display A
            console.log(beta) will display B
*/

// If I want to skip the third element
// just leave nothing (or a blank space) between 2 comas in that position
// like I'm doing with the 3rd position now:

const [alpha, beta,, dado, elephant, fun] = alphabet

console.log(alpha)
console.log(beta)
console.log(dado) // You see? It didn't take "C" because of the 2 comas above.
console.log(elephant)
console.log(fun)

console.log(alphabet) // They're all still there, but also outside, with new variable names.

const letters = ['m', 'n', 'o', 'p', 'q', 'r']
const [a,, c, ...rest] = letters
console.log(a) // m
console.log(c) // o
console.log(rest) // ['p', 'q', 'r'] this is the SPREAD OPERATOR

// NOW IF YOU WANT TO COMBINE 2 ARRAYS TOGETHER:

const newArray = [...alphabet, ...letters]
console.log(newArray) // OK, everybody logged!

            // "But this is not entirely useful for arrays"
            // "as we can also do the following:"

const veryNewArray = alphabet.concat(letters) // More practical?
console.log(veryNewArray)

