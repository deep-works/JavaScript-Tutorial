console.log("Starting Conditional Statements::");
/* Conditional Statements: 
    To implement some condition in the code. */


// if statement:
{
    let age = 18;
    if (age >= 18) {
        console.log("Eligible for Vote");
    }
    if (age < 18) {
        console.log("Not Eligible for Vote");
    }
}


// if-else statement:
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

{
    let age = 20;
    if (age >= 18){
        console.log("Eligible for Vote");
    } else {
        console.log("Not Eligible for Vote");
    }
}

{
    let number = 77;
    if (number%2 === 0){
        console.log(number, "Even Number");
    } else {
        console.log(number, "Odd Number");
    }
}


// syntax -> rules 

// else-if statement:  
{
    let score = 74;
    if (score >= 90){
        console.log("Grade: AA")
    } else if (score >= 80){
        console.log("Grade: A")
    } else if (score >= 70){
        console.log("Grade: BB")
    } else if (score >= 60){
        console.log("Grade: B+")
    } else if (score >= 50){
        console.log("Grade: B")
    } else if (score >= 40){
        console.log("Grade: C")
    } else if (score < 40){
        console.log("Grade: D")
    }
}

{
    let score = 102;
    if (score > 100){
        Result= "Grade::Something Error";
    } else if (score >= 90){
        Result= "Grade: AA";
    } else if (score >= 80){
        Result= "Grade: A";
    } else if (score >= 70){
        Result= "Grade: BB";
    } else if (score >= 60){
        Result= "Grade: B+";
    } else if (score >= 50){
        Result= "Grade: B";
    } else if (score >= 40){
        Result= "Grade: C";
    } else if (score < 40){
        Result= "Grade: D";
    }
    console.log(Result);
}

{
    let score = 80;
    if (score > 100){
        Result= "Grade::Something Error";
    } else if (score >= 90 && score <= 100){
        Result= "Grade: AA";
    } else if (score >= 80 && score <= 89){
        Result= "Grade: A";
    } else if (score >= 70 && score <= 79){
        Result= "Grade: BB";
    } else if (score >= 60 && score <= 69){
        Result= "Grade: B+";
    } else if (score >= 50 && score <= 59){
        Result= "Grade: B";
    } else if (score >= 40 && score <= 49){
        Result= "Grade: C";
    } else if (score < 40){
        Result= "Grade: D";
    }
    console.log(Result);
}


// Switch statement;