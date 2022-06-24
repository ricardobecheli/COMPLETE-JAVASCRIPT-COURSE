// Sevral braces in a block of code do not make any difference:
// (this block in NOT a function.)

{
    {
        {
            { var whatever = "Will I be visible?" }
        }
    }
}

console.log(whatever)   // The VAR IS visible also from outside this block (THIS SCOPE).
                        // (Again: this block in NOT a function.)

/*  If you call a "var" FROM OUTSIDE A FUNCTION an error will be returned:
    "var Name" is not defined.
*/

/*
The global scope in the browser is called "window".
("whatever" above goes to "window.whatever" in the browser.)

The global scope in Node is called "global".
*/