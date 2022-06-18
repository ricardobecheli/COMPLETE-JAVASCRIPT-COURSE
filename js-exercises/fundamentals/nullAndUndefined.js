const first = {name: 'Teste'}
            console.log(first)

const second = first
            console.log(second) // Second pointed to the same address as First.

second.name = 'Samba'
            console.log(first)

            /*  
                Now First pointed to the same address as Second. The equal sign is 2-way.

                Second = First  and  First = Second
            */

            /* So far console.log will display:
                { name: 'Teste' }
                { name: 'Teste' }
                { name: 'Samba' }
            */

console.log("Blank row")
console.log("The attributed in no longer an object. Now it's a primitive type, a number.")
                
let c = 3
let d = c
console.log(c, d)

console.log(c + ", "+ d + ". Concatenated with comma and period.")


console.log("Now increasing one numeric unit to d by the method d++:")


d++
console.log(d) // Supposed to display "4" and it did.
console.log("We have d=3, so d++ " + "= " + d) // Supposed to display "4" and it did.

console.log("Now let's check c, just in case:")
console.log(c)
console.log("c remains the same.")








