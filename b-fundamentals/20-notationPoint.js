/* We will:
1) Make some examples with const.
2) Create a funcion;
3) Define / create dynamically an internal attibute of this function;
4) Access it using the poit. Access the MEMBERS. Create attributes and/or funcions.
5) BRACKETS CAN DO IT TOO.

Teacher's explanation very complicated: Going into other subjects...

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
https://en.wikipedia.org/wiki/Object-oriented_programming#Objects_and_classes
https://www.youtube.com/watch?v=o5qceuQs34M
https://www.youtube.com/watch?v=b1aG-l1H6Ns
*/

console.log("The object is a connstant or varible")
console.log('BLANK ROW 1')


        const obj1 = {}
        obj1.name = 'FIRST GIVEN NAME: BallNoMatterIfNamedWithDot'
        console.log(obj1.name)
        // NAME was not there. This ATTRIBUTE is being created dynamically now.
        obj1['name'] = 'now renamed With Brackets Because Its The Same Object. Dot or brackets make the same result'
        // "this row and the above are equivalents. Dot or brackets make the same result".
        console.log(obj1.name)

console.log('BLANK ROW 2')

        const obj2 = {
            nome: 'Rick',
            address: "210, E. Sesame St.",
            aptNumber: (5*2-5)**2
        }
        console.log(obj2)

console.log('BLANK ROW 3')

console.log("Now it's a function and an Object")

function Obj(name) {
    this.name = name // name will become public = visible outside the function. will see this later.
}

const obj3 = new Obj('Chair')
console.log(obj3)
