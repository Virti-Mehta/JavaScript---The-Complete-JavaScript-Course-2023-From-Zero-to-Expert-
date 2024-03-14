'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 100);

//////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);
//JS uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
//My own example for abstraction
const lunchBreak = function () {
  console.log('This is a Lunch break!');
};

const coffeeBreak = function () {
  console.log('This is a coffee break☕');
};

const tp = function (fn) {
  fn();
  console.log(`Function called: ${fn.name}`);
};

tp(lunchBreak);
tp(coffeeBreak);


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Virti');
// greeterHey('Matilda');

// greet('Hey')('Drashti');

const greet = greeting => name => console.log(`${greeting}, ${name}`);

const greeterHey = greet('Hey');
greeterHey('Virti');
greeterHey('Matilda');

greet('Hey')('Drashti');

///////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Virti Mehta');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(23, 'Rucha');

//Call method
book.call(eurowings, 23, 'Rucha Mehta');
console.log(eurowings);

book.call(lufthansa, 236, 'Rajvi Mehta');
console.log(lufthansa);

//Apply method
const flightData = [583, 'Jinesh Doshi'];
book.apply(eurowings, flightData);
console.log(eurowings);

//Better way is to use call method and spread out contents of array
book.call(lufthansa, ...flightData);
console.log(lufthansa);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Rajan Jasani');

const bookLH234 = book.bind(lufthansa, 234);
bookLH234('Nishant Asnani');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial aplication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

//Challenge to create a function that returns a function for the logic written above without using bind
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
*/
//Closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
