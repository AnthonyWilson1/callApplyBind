//Call binds the correct this value

var obj = {num:2};
var obj2 = {num:5}
var addToThis = function(a) {
    return this.num + a
}

addToThis.call(obj, 3);//  functionName.call(obj, functionArguments)

console.log(addToThis.call(obj, 3));

var addToThis2 = function(a,b,c) {
    return this.num + a + b + c
}
var array = [1,2,3]

//apply similar to bind but accepts arrays

console.log(addToThis2.apply(obj,array))
console.log(addToThis2.apply(obj2,array))

// bind allows the function to be called later

console.log(addToThis2.bind(obj,array)) // binds function to the object
var bound = addToThis2.bind(obj)

console.log(bound)

console.log(bound(1,2,3))