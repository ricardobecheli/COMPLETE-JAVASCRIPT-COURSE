/* FIRST EXAMPLE: WITH VAR
1) Create an empty array.
2) It doesn't matter if the array is declared with VAR or CONST.
3) But INSIDE the loop we will check the VAR BEHAVIOR now:
4) For any given value after FOR, the odd result is 10!!! (because of VAR)
5) WHY? Because the funcion gets the VAR value soon after it goes OUT of the LOOP.
6) The LOP ranges from 0 to 9. After that the code goes on to 10.
7) This will be explained in details later in the course.
*/

const checkWithVar = []

for (var i = 0; i  < 10; i++) {
    checkWithVar.push(function() {
        console.log(i)
    })
}

checkWithVar [2] ()
checkWithVar [8] ()

/* SECOND EXAMPLE: WITH LET
1) But INSIDE the loop we will check the LET BEHAVIOR now:
2) For any given value after FOR, THE RESULT IS THE GIVEN VALUE.
3) For now we just know that LET keeps memory of what's inside the function.
4) It has to do with function CLOSURE.
*/

const checkWithLet = []

for (let i = 0; i  < 10; i++) {
    checkWithLet.push(function() {
        console.log(i)
    })
}

checkWithLet [2] ()
checkWithLet [8] ()