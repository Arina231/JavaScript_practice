// "use strict";
function fruitprocessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitprocessor(3, 3);
console.log(appleJuice);
const appleOrangeJuice = fruitprocessor(3, 3);
console.log(appleOrangeJuice);
