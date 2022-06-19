// ODD SITUATIONS 1 and 2

let sample1 // declared BUT no sample attributed / not initialized.

console.log(sample1)

        // console.log will display UNDEFINED.

//console.log(sample) //  sample2 is not even declared!!!

                    // commented here to avoid stop running the code in the "exit" area below.

                    // console.log will display "ReferenceError: sample is not defined.
                    // (among a lot of other error messages, and will stop running the code).

                    // UNDEFINED is different from NOT DEFINED.

// ANOTHER ODD SITUATION (3):

let sample3 = null
console.log(sample3)

        // console.log will display NULL.

        //Meaning "it does not point to anything in the memory."

        // NULL is used when the dev wants to replace some preexistent value for nothing at all.

/*
WARNING!
Do not try to access a null variable by any method.
i.e. console.log(sample3.ToString())
It will generate a "TypeError" problem.
*/

        // The most indicated to avoid this problem is to:
        // Always have a standard value associated to a variable you want to be empty.
        // "Empty" could be a good idea?

