/*     "DATA TYPES in JS"
Number, String, Boolean, Undefined, Null(object), BigInt, Symbol

DATA TYPES --> 
    (i) Primitive(7 types)
    (ii) Non-primitive -Objects 

--we use 'typeof' for know the variables data type. */



/* Here we know about some Primitive data types 
-----> */

// Number: 
let c = 56; console.log(c); 

// String:
let mainRole = "Iron Man";
console.log(mainRole);

// Boolean:
isFollow = true;
console.log(isFollow);

// Undefined:
let x; console.log(x);

// Null(absence of a object):
let y = null;
console.log(y);

// BigInt:   in this type a, n - print at the last of the value
let m = BigInt("102");
console.log(m);

// Symbol: 
let n = Symbol("Hello!");
console.log(n);

// ----- we check all the data types name is right or wrong in (Console) in (browser). Gooo. 


/* Now, we know about some Non-primitive data types
    Non-primitive Objects
-----> */
// Objects -> collection of values
// generally we use 'const' for declare the object
/*students
    |-->name (string types)
    |-->age (number types)
    |-->marks (number types)
    |-->isPass (boolean types)

here we use the syntax that like,
    "variable : values" or "key : values" -in a {}.

Ex- of a object:
    student = {
        name:Deep,
        age:20,
        marks:1350,
        isPass:true
    };
*/

const student = {
    name: "Des",
    age:20,
    marks:6.7,
    isPass:true
};
student["marks"] = student["marks"] + 0.25;
console.log(student);