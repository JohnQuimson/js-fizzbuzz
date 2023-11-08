'use strict';

const elementUl = document.querySelector('ul.lista');

for (let i = 1; i < 101; i++) {
  //Aggiungo elementi li in elementUl
  let elementLi = `<li class = "box">${i}</li>`;

  //Condizioni
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    elementLi = `<li class="box">FizzBuzz</li>`;
  } else if (i % 3 === 0) {
    console.log('Fizz');
    elementLi = `<li class="box">Fizz</li>`;
  } else if (i % 5 === 0) {
    console.log('Buzz');
    elementLi = `<li class="box">Buzz</li>`;
  }
  elementUl.innerHTML += elementLi;
}
