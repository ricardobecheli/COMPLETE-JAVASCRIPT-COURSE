// Continuing...

// With objects:

const product = {}

console.log(product) // The empty braces {} are displayed.

// If I try to display a variable's property (price) without a value:

console.log(product.price) // "undefined" will be displayed for "price".
// BUT anything after "price" (i.e: "price.discount") will display TypeError...

// Now will define the price:

product.price = 3.50
console.log(product) // If "price" not requested here, the price is displayed between braces.

//And now the product itself:

product.prodName = 'Smart TV'
console.log(product)
/* If no properties requested here, all will be displayed between braces,*/
/* (in an ARRAY shape? CSV?*/
/* But what about the colon and the property name?*/
/* do they make it an ARRAY OF STRINGS???)*/

// If a property IS REQUESTED its value is simply displayed:

        //THE POINT IS AN OPERATOR AND WHAT COMES AFTER IT IS A MEMBER.
        
console.log(product.price)
console.log(product.prodName)

// !! calls it as BOOLEAN. "null" equals false.
product.discount = null
console.log(!!product.discount) // note the "!!"


console.log(product) // Here the "null" word for "discount" is displayed.


// If you want to take the discount out, just DELETE it:
delete product.discount
console.log(product.discount) // "discount" goes back to "UNDEFINED".

// ONE LAST console.log
console.log(product) // Here the "null" word for "discount" is NOT displayed.