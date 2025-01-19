myName = "Deep Saha";
age = "20";
console.log(myName);
console.log(age);
x = null; //null - means we know what is in this, but here a empty value exists.
y =  undefined; //undefined - means we don't know what is in this.
console.log(x);
console.log(y);
isFollow =  "true"; //2 types (true / false) value available for store in 'boolean type values'.
console.log(isFollow);


Date = "18-Dec";
Date = "20-Dec";
console.log(Date); //Dynamically type


//'=' - this is a assigned operator whhich store it's "right side value" into it's "left side variable".


//variable names are case sensitive [Lowercase and Uppercase are not same].
company_Name = "Apple";
company_name = "Lenovo";
console.log(company_name);
console.log(company_Name);


//Only 'letters(A-Z|a-z)', 'underscore(_)', 'digits(0-9)' and '$' is allowed.
//1st character: Only a 'letter', 'underscore' or '$' should be. [Digits are not.]
$1 = "rs 83+";
console.log($1);


//Reserved words cannot be variable names. Like 'console' is a reserved words for JavaScript, we can't use it as a variable name. But we use 'Console' as a variable name. Because we know variables names are case sensitive, and reserved word 'console' - first letter 'c' is in lowerase form, but 'Console' - first letter 'C' is in uppercase form.
Console = "Done";
console.log(Console);


//Camel case: it's a Variables name style; we use this style in our code. The style is, we write two wrods together but no gap between the words, the letters of the first word is all in lowercase and only the fiest letter of the second word is in uppercase. Ex- 'firstName', 'fullBody', 'systemDesign', 'isFollow', 'fullName' etc.
//some another styles: 'full_name' -> Snake case; 'FullName' -> Pascal case;


let Name = "deep";
let dob = "12-may"; // we use 'let' word before the variable names.
// let: Variable cannot be re-declared but can be updated. A block scope variable.
console.log(Name);
console.log(dob);

var Dob = "12 may"; //Once upon a time 'var' uses same like 'let'. But, now we use 'let', not 'var'.
// var: Variable can be re-declared & updated. A global scope variable. It's uses before 2015. Now, we don't use it.
console.log(Dob);

const Dec = "31 Days";
const PI = 22/7;
// const: Variable canot be re-declared or updated. A block scope variable. It's use for mainly constant values, we can't change it.
console.log(Dec);
console.log(PI);


// 'block scope variable' - block means '{}' this bracket. it's work like,
{
    let number = 10;
    console.log(number);
}
{
    let number = 20;
    console.log(number);
}
// but without use different '{}', when declare a same variable name for different two or more values, then it's prints the last declare value of the variable.



let a;
console.log(a);
let b;
b = "Bat";
console.log(b);

const aa = "HEyyy"; 
/* use 'const' we can't write like,
    const aa;
    aa = "HEyyy"; */
console.log(aa);