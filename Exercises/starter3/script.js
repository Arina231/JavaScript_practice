// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '24';
// if (x === 24) {
//   console.log(24);
// }
// const calcAge = birthYear => 2037 - birthYear;

// const tempp = [3, -2, -1, -6, ' ', 15, 11, 10, 18];
// const calcTempsAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
// };
// calcTempsAmplitude(tempp);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('degree celsius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
