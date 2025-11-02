'use strict';

let body = document.querySelector('body');
let header = document.querySelector(".header");
let headerButton = document.querySelector('.header__burger');

window.addEventListener('scroll', () => {
  window.scrollY > 1
    ? header.classList.add('active')
    : header.classList.remove('active')
})

headerButton.addEventListener('click', () => {
  header.classList.toggle('opened')
  body.classList.toggle('locked')
})

