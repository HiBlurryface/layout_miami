'use strict';

let body = document.querySelector('body');
let header = document.querySelector(".header");
let headerButton = document.querySelector('.header__burger');

headerButton.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('locked')
})
