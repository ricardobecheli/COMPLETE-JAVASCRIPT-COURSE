// FIRST VAR:

for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log("i after and outside the loop = ", i)
// JS recognized the var outside the loop.


// NOW LET:
console.log("NOW LET." + " Look: Untill here below, ok. Displayed from 0 to 9")

for (let w = 0; w < 10; w++) {
    console.log(w)
}
// Untill here, ok. Displayed from 0 to 9.

console.log("w after and outside the loop = ", w)
/* Here w is NOT DEFINED. ReferenceError. OK!
Expected because let has local scope and is not recognized outside here.
*/