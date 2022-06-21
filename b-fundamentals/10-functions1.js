    
    // Objects are FUNCTIONS!!!
console.log(typeof Object)

    // class is a structure created in ECMA Script 2015:

class product {}
console.log(typeof product) // Classes are FUNCTIONS!!!


        console.log("JAVASCRIPT IS HIGHLY CENTERED IN FUNCTIONS.")


        console.log("FUNCTION WITHOUT RETURN IN JS:")


function printSum(priceTvA, priceTvB) {
    console.log(priceTvA + priceTvB)
}                               //Executing, nothing is displayed so far. NO RETURN.

                                //  to obtain a return you must do this: printSum(...)

printSum(2, 3)                  // Now "5" is displayed.
printSum(2)                     // number + undefined = NaN
printSum(2, 10, 3, 4, 5, 6)     // JavaScript sums the first two 
                                // and the others are ignored. 
                                // (only JS does that? It seems yes!)
                                // Some find it strange but it means FLEXIBILITY.


        console.log("FUNCTION WITH a  RETURN IN JS:")


function sumReturn(priceTvC, priceTvD = 1) {    //Attributed a STANDARD VALUE to priceTvD.
    return priceTvC + priceTvD                  //"return" now is part of the function
}

console.log(sumReturn(3)) // Only priceTvC attibuted here, BUT the above STANDARD is added.

console.log(sumReturn(3, 20)) // But when a price* is attributed HERE, here's is the valid one!
                              // * price (number) or any other type. If string, will concat:
                              // Not shure about other types, like boolean. How to insert?

console.log(sumReturn(3, " Plus the concatenated string"))

        // END OF THIS FILE.
