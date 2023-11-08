'use strict';

const multiplo3 = 'Fizz';
const multiplo5 = 'Buzz';
const multiplo35 = 'FizzBuzz';

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0) {
    i = multiplo3;
  }

  console.log(i);
}
