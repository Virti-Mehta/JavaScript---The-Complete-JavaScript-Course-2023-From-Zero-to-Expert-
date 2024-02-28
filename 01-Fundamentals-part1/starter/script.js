/*
let firstName = "Jonas";
console.log(firstName);
console.log(43);
40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);
//Name Convention - camelCase
let myFirstJob = "Teacher";
let myCurrentJob = "Coder";
//typeof
console.log(typeof 43);
//Dynamic Typing
let JavaScriptisFun = true;
console.log(typeof JavaScriptisFun);
JavaScriptisFun = 'FUN!';
console.log(typeof JavaScriptisFun);
//Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1981;
console.log(typeof year);

//legacy error or buck
console.log(typeof null);

/////////////////////
let age = 30;
age = 31;

//const birthYear = 1991;
// birthYear = 1990;
//const job; Not allowed
//Avoid these type of variable declarations
var job = "Programmer";
job = "Teacher";

lastName = "Mehta";
console.log(lastName);



//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 power of 3

//concatenation
const firstName = "Virti";
const lastName = "Mehta";
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////
const firstName = "Virti";
const job = "Programmer";
const birthYear = 2002;
const year = 2037;

const virti = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(virti);

// Template literals - ESXi feature using backticks before 1 key
const virtiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(virtiNew);

//Backticks can be used for normal strings too as backticks are never used in a sentence
console.log(`Just a regular string...`);

//Next usecase of backticks is printing multiline strings. Older way of multiline strings is using \n 
console.log(`Multiple
Line
String`);
*/

const age = 15;

if (age >= 18) {
    console.log("Sarah can start drivimg license 🚗") // Windows + . for emoji
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}