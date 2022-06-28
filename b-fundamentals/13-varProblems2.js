
var number = 1
{
    number = 2
    console.log("Dentro = ", number)
}

console.log("Fora = ", number)

// The same output = 2, the last to be assigned. Block is ignored by JS unless it's a function.