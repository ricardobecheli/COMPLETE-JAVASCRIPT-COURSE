// Array: a neat way of storing a list of data items under a single variable name.

/* 
Arrays are generally described as "list-like OBJECTS"; they are basically single objects that contain multiple values stored in a list.

Array objects can be stored in variables

and dealt with in much the same way as any other type of value,

the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice it would already be annoying, but what about 100 items, or 1000?
*/

const notasMensais = [7.7, 8.9, 6.3, 9.2]
console.log(notasMensais[0], notasMensais[3])
console.log(notasMensais[1], notasMensais[2])
console.log(notasMensais[1], notasMensais[4])
console.log(notasMensais[4])
console.log(notasMensais)
console.log(notasMensais.length)
notasMensais[4]=10.1    // brackets are used for inserting or changing a value.
console.log(notasMensais)
console.log(notasMensais.length)
notasMensais[5]=11
console.log(notasMensais)
console.log(notasMensais.length)
notasMensais.push(12, 13, 14, 15, 16)
/* "push" inserts new values of any type i.e. nr+str+bool
but it's better not to mix types of data */
console.log(notasMensais)
console.log(notasMensais.length)
console.log(notasMensais)
console.log(notasMensais)
// 2 ways of removing values from the array:

// 1 -  "pop" removes the last one:
console.log(notasMensais.pop()) //displays only the removed value
console.log(notasMensais)  // displays the new array values

// 2 - "delete" thevalue in thwe specified order

delete notasMensais[1] // will delete the "8.9" but the space of order 1 keeps empty. Look:
// It displays "<1 empty item>" in the "1" place.
console.log(notasMensais)

//Let's check what happens in I insert something in "1":

notasMensais[1]=250  // brackets are used for inserting or changing a value.
console.log(notasMensais)
// YES!

console.log(typeof notasMensais) // Arrays are OBJECT in JS

// push and pop area METHODS of inserting and deleting to and from OBJECTS.
