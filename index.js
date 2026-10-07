/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const conc =
  s1 +
  " " +
  s2 +
  " " +
  s3 +
  " " +
  s4 +
  " " +
  s5 +
  " " +
  s3 +
  " " +
  s2 +
  " " +
  s1 +
  " " +
  s4;

console.log(conc);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const lastLetter1 = part1.charAt(3);
const capitalizeLastLetter1 = lastLetter1.toUpperCase();
const startPhrase1 = part1.slice(0, 3);
const word1 = startPhrase1 + capitalizeLastLetter1;

const lastLetter2 = part2.charAt(5);
const capitalizeLastLetter2 = lastLetter2.toUpperCase();
const startPhrase2 = part2.slice(0, 5);
const word2 = startPhrase2 + capitalizeLastLetter2;

console.log(word1 + word2);
// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipCalculator = billTotal * 0.15;

console.log(tipCalculator);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const random = list[Math.floor(Math.random() * list.length)];

console.log(random);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false b, since  b is false and are using "&&" which requires both to be true

const expression2 = a || b; // true, because at least one value is true.

const expression3 = !a && b; // false because both values are false, !a means a value reverses to false

const expression4 = !(a && b); // true, a and b are checked first for their values, which are false, after that ! reverses it to true

const expression5 = !a || !b; // true because at least one is true, which is b, turning from false to true

const expression6 = !(a || b); // false, a or be is checked for true, comes out as true as a is true, then ! reverses the value to false

const expression7 = a && a; // true, since a is true
