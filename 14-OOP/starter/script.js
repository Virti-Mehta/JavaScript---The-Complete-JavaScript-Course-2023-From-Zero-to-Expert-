'use strict';
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this as it would create a copy of this function every time we create a new object
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const virti = new Person('Virti', 2002);
console.log(virti);
console.log(virti instanceof Person);
//Prototype property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
