/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

const massMark = 95;
const hieghtMark = 1.88;
const massJohn = 85;
const hieghtJohn = 1.76;

const markBMI = massMark / hieghtMark ** 2;
const johnBMI = massJohn / hieghtJohn ** 2;
/*
const markBMI = massMark / (hieghtMark * hieghtMark);
const johnBMI = massJohn / (hieghtJohn * hieghtJohn);
*/

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
