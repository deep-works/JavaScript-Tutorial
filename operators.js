console.log("Starting Operators::");
/* 'Operators' used to perform some operation on data.

    Arithmetic Operators: +, -, *, /
*/

{
    let a = 4;
    let b = 8;
    console.log("a =",a, "& b =",b);
    console.log("a+b =", a+b);
    console.log("a*b =", a*b);  
    console.log("a-b =", a-b);
    console.log("a/b =", a/b);
}


// Modulus operator: '%'
{
    let a1 = 68;
    let b1 = 20;
    console.log("a1 =",a1, "& b1 =",b1);
    console.log("a1 % b1 =", a1%b1);
}

// Exponentiation operator: 'a**b' ---> a^b 
{
    let a = 3;
    let b = 4;
    console.log("a =",a, "& b =",b);
    console.log("a^b =", a**b);
}


/* Unary operator: 2 types --
    (i)  Increment
    (ii) Decrement
*/

// Post-Increment operator: 'a++'  ---> a = a+1
{
    let a = 3;
    console.log("a =", a);
    a++;
    console.log("After operation Increment, a =", a);

    let b = 13;
    console.log("b =", b);
    console.log("After operation Increment, b =", b++); //This code not working correctly.

    // In 'Post' the operators works in a line, and prints the newest value in next line; where in 'Pre' the operators works in which line that same line prints the new value.
}
// Pre-Increment operator: '++a'  ---> a = a+1
{
    let a = 3;
    console.log("a =", a);
    console.log("After operation Increment, a =", ++a);
}

// Post-Decrement operator: 'a--'  ---> a = a-1
{
    let a = 7;
    console.log("a =", a);
    a--;
    console.log("After operation Decrement, a =", a);
}
// Pre-Decrement operator: '--a'  ---> a = a-1
{
    let a = 7;
    console.log("a =", a);
    console.log("After operation Decrement, a =", --a);
}

// the result is always same for 'pre' or 'post' increment or decrement operators.


/* (Assign values) 
    Assignment Operators: =, +=, -=, *=, /=, %=, **=
*/

// "Left = Right" - here value goes to Right ---> Left, using '=' this operator.
// "a+=b" -it's mean "a = a+b".
// "a-=b" -it's mean "a = a-b".
// "a*=b" -it's mean "a = a*b".
// "a/=b" -it's mean "a = a/b".
// "a%=b" -it's mean "a = a%b".
// "a**=b" -it's mean "a = a**b".


/* Comparison Operators: ==(Equal to), !=(Not equal to), ===(Equal to & type), !==(Not equal to & type), <, <=, >, >=     */

{
    let m = 6;
    let n = 6;
    console.log("m == n", m == n);
    let x = 19;
    let y = 14;
    console.log("x != y", x!=y);
}
{
    let c = 5;
    let d = "5";
    console.log("c === d", c === d);
    let a = 5;
    let b = "5";
    console.log("a !== b", a !== b);
}


/* Logical Operators: &&(logical and), ||(logical or), !(logical not) */
/*  cond1 | cond2 || '&&' | '||'
    ----------------------------
      T   |    T  ||    T |   T
      T   |    F  ||    F |   T
      F   |    T  ||    F |   T
      F   |    F  ||    F |   F

    logical not (!) -- change true->false and false->true at result.
*/

// Explore 'logical and' (&&)
{
    let a = 5;
    let b = 8;
    let cond1 = a<b;
    let cond2 = a===b;
    console.log("cond1 && cond2 = ", cond1 && cond2);
}
{
    let a = 5;
    let b = 8;
    let cond3 = a>b;
    let cond4 = a===5;
    console.log("cond3 && cond4 = ", cond3 && cond4);
}
{
    let a = 5;
    let b = 8;
    let cond5 = a < b;
    let cond6 = a===5;
    console.log("cond5 && cond6 = ", cond5 && cond6);
}
{
    let a = 5;
    let b = 8;
    console.log("cond7 && cond8 = ", a < b && a===4);
}

// Explore 'logical or' (||)
{
    let a = 14;
    let b = 7;
    console.log("cond1 || cond2 = ", a<b || a===7);
}
{
    let a = 14;
    let b = 14;
    console.log("cond3 || cond4 = ", a<b || a===b);
}
{
    let a = 14;
    let b = 15;
    console.log("cond5 || cond6 = ", a>b || a===b);
}

// Explore 'logical not' (!)
{
    let a = 14;
    let b = 14;
    console.log("!(a===b) = ", !(a===b));
    // 'logical not' print the opposite result of the original operation result. 
}


/* Ternary Operator:  
    - this operator is a another technique, works like same if-else statement.
*/

{
    let age = 20;
    let result = age >= 18 ? "adult" : "not adult";
    console.log(result);
}
{
    let age = 17;
    age >= 18 ? console.log("adult") : console.log("not adult");
}



alert("hello-alert"); // one time popup

// Using 'prompt' we can get some inputs from user and then print this on console page.
let name = prompt("Please write your name here & we print this on console page");
console.log(name); 