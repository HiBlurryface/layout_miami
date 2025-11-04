
let body = document.querySelector('body');
let header = document.querySelector(".header");
let headerButton = document.querySelector('.header__burger');

// var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// let form = document.querySelector('#contact-form');
// let nameInput = document.querySelector('#name');
// let emailInput = document.querySelector('#email');
// let nameError = document.querySelector('#name-error')
// let emailError = document.querySelector('#email-error')
// let messageInput = document.querySelector('#message');
// let messageError = document.querySelector('#message-error');

window.addEventListener('scroll', () => {
  window.scrollY > 1
    ? header.classList.add('active')
    : header.classList.remove('active')
})

headerButton.addEventListener('click', () => {
  header.classList.toggle('opened')
  body.classList.toggle('locked')
})

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   console.log('seccues')
// })

// function addError(input) {
//   input.parentElement.classList.add('error');
// }

// function removeError(input) {
//   input.parentElement.classList.remove('error');
// }

// nameInput.addEventListener('input', function () {
//   if (this.value.length === 0) {
//     addError(this)
//     nameError.textContent = 'Field can`t be empty!';
//   } else {
//     removeError(this)
//   }
// })

// emailInput.addEventListener('input', function () {
//   if (this.value.length < 1) {
//     addError(this)
//     emailError.textContent = 'Field can`t be empty!'
//   } else if (!regex.test(this.value) && this.value.length > 1) {
//     addError(this)
//     emailError.textContent = 'Wrong email addres!'
//   } else {
//     removeError(this)
//   }
// })

// messageInput.addEventListener('input', function () {
//   if (this.value.length < 1) {
//     addError(this);
//     messageError.textContent = 'Field shoult least minimum 10 symbols!'
//   } else {
//     removeError(this);
//   }
// })
