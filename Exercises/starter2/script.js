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

// const calcAverage = (X, Y, Z) => {
//   return `the average is ${(X + Y + Z) / 3}`;
// };
// console.log(calcAverage(3, 4, 5));

// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphin, scoreKoalas);

// const checkWinner = (avgDolphin, avgKoalas) => {
//   if (avgDolphin >= 2 * avgKoalas) {
//     console.log(`Dolphin win ${avgDolphin} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphin) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphin}`);
//   } else {
//     console.log("no team wins");
//   }
// };
// checkWinner(scoreDolphin, scoreKoalas);
// checkWinner(666, 222);

// const friends = ["nazy", "arina", "tania"];
// console.log(friends.length);
// const newLength = friends.push("tonny");
// console.log(friends);
// console.log(newLength);
// friends.unshift("mihal"); // add at first place
// console.log(friends);
// const pooped = friends.pop(); //remove last elements
// console.log(pooped);
// friends.shift(); //remove the first one
// console.log(friends.indexOf("arina"));
// console.log(friends.includes("mumu"));

// if (friends.includes("mihal")) {
//   console.log("your forever");
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

const arina = {
  firstName: "Arina",
  lastName: "Ahona",
  profession: "bekar",
  location: "Dhaka",
};
console.log(arina.firstName);
console.log(arina["firstName"]);
const informIn = prompt("What do you want to know about arina?");
console.log(arina[informIn]);
