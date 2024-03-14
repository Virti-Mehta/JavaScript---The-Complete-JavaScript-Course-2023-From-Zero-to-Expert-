'use strict';
//Use of this function
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

const matilda = {
  year: 2017,
};

matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();
