'use strict';

const elementUl = document.querySelector('ul.lista');

for (let i = 1; i < 101; i++) {
  const elementLi = `<li class = "box">${i}</li>`;
  elementUl.innerHTML += elementLi;
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
