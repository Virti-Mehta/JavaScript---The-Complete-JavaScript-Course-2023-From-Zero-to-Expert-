/*
const country = "India";
const continent = "Asia";
let population = 1428;
console.log(country);
console.log(continent);
console.log(population);

// Lecture 007

const isIsland = false;
const language = "Hindi";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//language = "Hindi";

console.log("If your country split in half, and each half would contain half the population,then how many people would live in each half? ", population / 2);

//population++;
console.log("After incrementing population ", population);

const populationFinland = 6;
console.log(population > populationFinland);

const averagePopulation = 33;
console.log(population < averagePopulation);

//const description = country + " is in " + continent + ", and its " + population + " million population speaks " + language;

const description = `${country} is in ${continent} and its ${population} million population speaks ${language}`;
console.log(description);
// population = 13;
// population = 130;
if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    const differencePopulation = averagePopulation - population;
    console.log(`${country}'s population is ${differencePopulation} million below average`);
}
*/
// console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);
///////////////////////////////
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than one border");
// } else {
//     console.log("No border");
// }

/////////////////////////////
const country = "India";
let population = 1428;
const isIsland = false;
const language = "Hindi";

// const country = "Canada";
// let population = 23;
// const isIsland = true;
// const language = "English";

if ((language === "English") && (population < 50) && (isIsland)) console.log(`You should live in ${country} :)`);
else console.log(`${country} does not meet your criteria :(`);