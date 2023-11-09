'use strict';

const elementUl = document.querySelector('.lista');

for (let i = 1; i <= 100; i++) {
  //Aggiungo elementi li in elementUl
  const elementLi = document.createElement('li');
  let value = i;

  //Condizioni
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    value = 'FizzBuzz';
    elementLi.classList.add('box');
    elementLi.classList.add('m3-5');
  } else if (i % 3 === 0) {
    console.log('Fizz');
    value = 'Fizz';
    elementLi.classList.add('box');
    elementLi.classList.add('m3');
  } else if (i % 5 === 0) {
    console.log('Buzz');
    value = 'Buzz';
    elementLi.classList.add('box');
    elementLi.classList.add('m5');
  } else {
    console.log(i);
    elementLi.classList.add('box');
    elementLi.classList.add('standard');
  }

  //Aggiungo value ai li
  elementLi.append(value);

  //Aggiungo elementLi a elementUl
  elementUl.append(elementLi);
}
