/* Strings:
    'String' is a sequence of characters used to represent text.
*/

/* 
Create String:
    let str = "Temple Run";

String Length:
    str.length

String Indices: [For, Single Number it's called 'Index'] - this is a character position of the string. Position number start from 0 [0,1,2,3,.......]
    str[0], str[1], str[2]
*/

let str = "Battle Ground Mobile India";
let str2 = 'Day Night';
let name =  "Alex Burnoff";
console.log(str);
console.log(str[8]);


/* Template Literals (A special type of string) in JS:
    A way to have embedded expressions in strings.
        `this is a template literal`
*/

/* String Interpolation:
    To create strings by doing substitution of placeholders.
        `string text ${expression} string text`
*/

let stc = `This is a sentence.`;
console.log(stc);
console.log(typeof stc);

{
    let obj ={
        item: "Pen",
        price: 20
    };
    console.log("The cost of", obj.item, "is", obj.price, "rupees");
}

{
    let obj ={
        item: "Pen",
        price: 20
    };
    let output = `The cost of ${obj.item} is ${obj.price} rupees`;
    console.log(output);
}

{
    let sumNum = `This is a template literal, the sum is ${1+2+3+4}`;
    console.log(sumNum);
}


/* Escape characters: [count as a single character. Length of this is 1]
    \n -> next line
    \t -> tab space
*/
let str3 = "Twenty Eight \nDecember";
console.log(str3);
console.log("Length :", str3.length);

let str4 = "Christmas \tTime";
console.log(str4);


/* String Methods in JS:
    These are built-in functions to manipulate a string.
    * str.toUpperCase() 
    * str.toLowerCase()
    * str.trim() -- removes whitespaces starting and ending.
    * str.slice(strat, end?) -- returns part of  string, 'end' value not including in the answer.
    * str1.concat(str2) -- joins str2 with str1
    * str.replace(searchVal, newVal) // str.replaceAll(searchVal, newVal) -- replace multiple values.
    * str.charAt(idx)
*/
{
    let str5 = "Amazon Prime";
    console.log(str5);
    console.log(str5.toUpperCase());
    console.log(str5.toLowerCase());
}

{
    let str6 = "     Coca Cola  ";
    console.log(str6.trim());
}

{
    let str7 = "0123456789";
    console.log("Input:",str7);
    console.log("Output after slice:",str7.slice(2, 7));
}

{
    let str8 = "Squid Game ";
    let str9 = "Season 2";
    console.log(str8);
    console.log(str9);
    console.log("After join 2 string:", str8.concat(str9));
    
    let join = str8 + str9; // we join strings using '+'
    console.log("After joining (using '+'):",join);
    
    console.log("After joining (direct using '+'):" + str8 + str9);
}

{
    let str10 = "MSc";
    console.log(str10);
    console.log("After replace:",str10.replace("M", "B"));
    console.log("After replace:",str10.replace("Sc", "CA"));
    console.log("After replace:",str10.replace("Sc", "Tech"));

    let str = "CGC";
    console.log(str);
    str = str.replace("C", "K");
    console.log("After replace:",str);
    
    let str11 = "School";
    console.log(str11);
    console.log("After replace:",str11.replaceAll("o", "a"));
}

{
    let str = "ILoveJS";
    console.log(str);
    console.log("charAt(5) =",str.charAt(5));
}