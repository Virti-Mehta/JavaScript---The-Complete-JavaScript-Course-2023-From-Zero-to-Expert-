// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Coding Challenge 1
const printForecast = function (arr) {
  let str;
  for (let i = 0; i < arr.length; i++) {
    debugger;
    str += `...${arr[i]}°C in ${i + 1} days`;
  }
  console.log(str);
};
/*
Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/
printForecast([17, 21, 23]);
