
let body = document.querySelector('body');
let header = document.querySelector(".header");
let headerButton = document.querySelector('.header__burger');

var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let form = document.querySelector('#contact-form');
let inputs = document.querySelectorAll('.form__validate');
let errors = document.querySelectorAll('.form__error-info');
let toast = document.querySelector('.toast');

window.addEventListener('scroll', () => {
  window.scrollY > 1
    ? header.classList.add('active')
    : header.classList.remove('active')
})

headerButton.addEventListener('click', () => {
  header.classList.toggle('opened')
  body.classList.toggle('locked')
})

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;
  inputs.forEach((input) => {
    let result = validate(input);

    if (!result) {
      isValid = false;
    }
  });

  if (isValid) {
    let data = [];

    inputs.forEach((input) => {
      let inputData = {
        [input.id]: input.value,
      }
      data.push(inputData);
      input.value = "";
    })

    toast.classList.add('active')
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);

    console.log(data)
  }
})

inputs.forEach((input) => {
  input.addEventListener('input', function () {
    validate(input)
  })
});

function validate(input) {
  const val = input.value.trim();

  if (val === '') {
    addError(input, 'Field can\'t be empty!')
    return false;
  }

  if (input.id === 'email' && !regex.test(val)) {
    addError(input, 'Wrong email address!')
    return false;
  }

  removeError(input)
  return true;
}

function addError(input, error) {
  let currentError = Array.from(errors).find(el => el.id === `${input.id}-error`);
  currentError.textContent = error;

  input.parentElement.classList.add('error');
}

function removeError(input) {
  input.parentElement.classList.remove('error');
}
