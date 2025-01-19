/* Arrays:
    Collection of items.
*/

/* Examples-
    let array_name = ["...", "...", "...", "..."];
*/

let marks = [38, 49, 54, 58, 71, 60, 65, 52];
console.log(marks);
console.log("size:",marks.length); // property

let heroes = ["Thor", "Iron Man", "Captain America", "Hulk"];
console.log(heroes);


/* Array Indices:
    arr[0], arr[1], arr[2], ...
*/

let roll = [9, 12, 18, 4, 6, 5, 16];
console.log(roll);
console.log("roll[2]:",roll[2]);
console.log("roll[20]:",roll[20]);
roll[2] = 15;
console.log(roll);
console.log("new, roll[2]:",roll[2]);


/* In JavaScript, 
    * String -> Immutable - we can't change the value.
    * Array -> Mutable - we can change the value.
*/


/* Looping over an Array:
    Print all elements of an array.
    Examples-
    for(let idx = 0; idx < arr.length; idx++){
        // do some work
    }
*/

let heroes2 = ["AntMan", "Spider Man", "Doctor Strange", "Wanda", "Vision"];
for (let idx = 0; idx < heroes2.length; idx++){
    console.log(heroes2[idx]);
}

// for-of
for (let hero of heroes2){
    console.log(hero);
}

for (let hero of heroes2){
    console.log(hero.toUpperCase());
}
console.log("end end");


/* Array Methods:
    * Push(): add to end
    * Pop(): delete from end & return
    * toString(): converts array to string
*/

// .push()
let veggies = ["Potato", "Tomato", "Onion", "Ginger"];
console.log(veggies);
veggies.push("Chili");
console.log(veggies);
veggies.push("Beans", "Paneer", "Pumpkin");
console.log(veggies);
console.log("______________________");

// .pop()
let veggies1 = ["Potato", "Tomato", "Onion", "Ginger"];
console.log(veggies1);
veggies1.pop();
console.log(veggies1);
veggies1.pop();
console.log(veggies1);
console.log("______________________");

// .toString()
let veggies2 = ["Potato", "Tomato", "Onion", "Ginger", "Chili"];
console.log(veggies2);
console.log(veggies2.toString());
console.log("end end");


/*  Concat(): joins multiple arrays & returns result
    unshift(): add to start [this method works like 'push'] 
    shift(): delete from start & return [this method works like 'pop']
*/

// Concat():
let avengers1 = ["Thor", "Iron Man", "Captain America", "Hulk"];
let avengers2 = ["Captain Marvel", "Doctor Strange", "Wanda"];
let avengers3 = ["Sang-Chi"];
let avengers = avengers1.concat(avengers2, avengers3);
console.log(avengers);

// unshift():
console.log(avengers);
avengers.unshift("AntMan", "Spider Man");
console.log(avengers);

// shift():
avengers.shift();
console.log(avengers);

console.log("end");


/*  Slice(): returns a piece of the array
        slice(start_idx, end_idx)
    Splice(): change original array (add, remove, replace)
        splice(start_idx, delCount, newEl1...)
*/

// Slice():
let items = ["Chips", "KurKure", "Oreo", "KitKat", "Maza"];
console.log(items);
console.log(items.slice(1,3));

// Splice();
console.log("replace this item:",items.splice(2, 1, "Jim Jam"));
console.log(items);
console.log(items.splice(2, 0, "Oreo"));
console.log(items);