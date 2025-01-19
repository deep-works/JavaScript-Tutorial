/* Loops: 
    'Loops' are used to execute a piece of code again & again. 
*/

// for loop:
/* for (initialize ; stopping condition ; updation){
        console.log(".....");
    }
*/
for(let count = 1; count <= 86; count++){
    console.log("loop on");
}
console.log("Loop has ended.");

// Print 1 to 14 :
for (let i=1; i<=14; i++){
    console.log("i =", i);
}
console.log("Loop has ended.");

for (let i=9; i<=90; i=i+9){
    console.log("i =", i);
}
console.log("Loop has ended.");


// Calculate sum of 1 to 12:
{
    let sum = 0;
    for (let i = 1; i <= 12; i++){
        sum = sum + i;
    }
    console.log("sum =",sum);
}
// Calculate sum of 1 to n :
{
    let sum = 0;
    let n = 12;
    for (let i = 1; i <= n; i++){
        sum = sum + i;
    }
    console.log("sum =",sum);
}


// Infinite Loop: A loop that never ends. -- we should never use this loop
/*
Example-
    for (let i=1; i>=0; i++){
        console.log("i =", i);
    }
*/


// while loop:
/* while (condition){
        console.log(".....");
    }
*/
let i = 1;
while (i <= 6){
    console.log("i =", i);
    i++;
}
{
    let i = 1;
    while (i <= 6){
        console.log("fooo");
        i++;
    }
}
{
    let i = 1;
    while (i <= 6){
        console.log("fooo",i);
        i++;
    }
    console.log("End of loop");
}


let a = 10;
while(a <= 5){
    console.log("a =",a);
    a++;
}
console.log("Loop end");

// do-while loop:
/* do{
        console.log("......");
    }while (condition);
*/
let b = 10;
do{
    console.log("b =", b);
    b++;
}while(b <= 5);
console.log("Loop end");

{
    let b = 1;
    do{
        console.log("b =", b);
        b++;
    }while(b <= 5);
    console.log("Loop end");
}


// for-of loop:
/*
    for(let 'val' (variable) of 'strVar' (string/array variable)){
        // do work.....
    }
*/ 
let str = "VS Code";
for(let i of str){
    console.log("i =", i);
}
console.log("End.");


let str1 = "JavaScript";
let size = 0;
for(let c of str1){
    console.log("c =",c);
    size++;
}
console.log("String size =", size);
console.log("End.");


// for-in loop:
/* 
    for(let 'key' in 'objVar' (object/array variables)){
        // do work......
    }
*/
let student = {
    name: "Deep",
    age: 20,
    cgpa: 6.95,
    isPass: true
}
for(let i in student){
    console.log("key =",i, " value =", student[i]);
}