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
