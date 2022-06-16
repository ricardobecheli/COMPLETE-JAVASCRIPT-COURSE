/*
The basic of objects in this lesson: 

Object Literals in JavaScript:
        These come up in interviews more than you think!!!

Literal:
        Any fixed value in source code.

The simplest way to create an OBJECT LITERAL is:
        To assign an empty object to a variable. For example: var foo = {}; That is it. In that one line, you have created an object literal. Now, that object is empty. 

OBJECTS have two kinds of “things”:
        Properties and methods.

PROPERTY:
        Any valid JavaScript type (i.e. string, number, boolean, function, array, etc).

METHOD:
        A property of the object to which you have assigned an anonymous function.
        So the property is now equal to a function.
        It is still a property of the object, but because it “does” something, we now call it a “method”.
*/

const prod1 = {}    // Empty OBJECT: the braces with nothing inside.
                    //prod1 is a VARIABLE.

        // There can be objects inside objects. ie: products - kind of product - kind ID etc.

prod1.name = 'Ultra Mega Cell Phone'
        /* "name" was now dynamically created inside the object.
        "name" is an ATTRIBUTE and can be any type:string (like "name"), boolean, number, function, etc.*/

prod1.price = 345.67
        // "price" is another attribute. BOTH now belong to prod1.

console.log(prod1)
        // Displays: { name: 'Ultra Mega Cell Phone', price: 345.67 }

