// "use strict";
// function fruitprocessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleOrangeJuice = fruitprocessor(3, 3);
// console.log(appleOrangeJuice);

// //function expression
// const fruitprocessor2 = function (apples, oranges) {
//   return `juice with ${apples} apples and ${oranges} oranges.`;
// };
// const appleJuice = fruitprocessor2(3, 3);
// console.log(appleJuice);

// //arrow function

// const fruitprocessor3 = (apples, oranges) => {
//   return `juice with ${apples} apples and ${oranges} oranges.`;
// };

// console.log(fruitprocessor3(3, 3));

// const calPrice = (perKgP, weight) => {
//   return `total price is ${perKgP * weight}`;
// };
// console.log(calPrice(30, 3));

const calcAverage = (X, Y, Z) => {
  return `the average is ${(X + Y + Z) / 3}`;
};
console.log(calcAverage(3, 4, 5));

const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphin, scoreKoalas);

const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin >= 2 * avgKoalas) {
    console.log(`Dolphin win ${avgDolphin} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas win ${avgKoalas} vs ${avgDolphin}`);
  } else {
    console.log("no team wins");
  }
};
