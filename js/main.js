'use strict';

//DICHIARAZIONI
const multiplo3 = 'Fizz';
const multiplo5 = 'Buzz';
const multiplo35 = 'FizzBuzz';

for (let i = 1; i < 101; i++) {
  console.log(i);

  if (i % 3 == 0) {
    i = multiplo3;
    console.log(i);
  } else if (i % 5 == 0) {
    i = multiplo5;
  } else if (i % 3 == 0 && i % 5 == 0) {
    i = multiplo35;
  }
}

// //verifica multiplo 3
//   if (i % 3 == 0) {
//     i = multiplo3;

//     //verifica multiplo 5
//   }
//   if (i % 5 == 0) {
//     i = multiplo5;

//     //verifica multiplo 3 e 5
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     i = multiplo35;
//   }
