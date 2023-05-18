// "use strict";
function fruitprocessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleOrangeJuice = fruitprocessor(3, 3);
console.log(appleOrangeJuice);

//function expression
const fruitprocessor2 = function (apples, oranges) {
  return `juice with ${apples} apples and ${oranges} oranges.`;
};
const appleJuice = fruitprocessor2(3, 3);
console.log(appleJuice);

//arrow function

const fruitprocessor3 = (apples, oranges) => {
  return `juice with ${apples} apples and ${oranges} oranges.`;
};

console.log(fruitprocessor3(3, 3));
