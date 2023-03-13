import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');


const FORM_KEY = "goit-example-message";

form.addEventListener('input', throttle(InputData, 500));
form.addEventListener('submit', formSubmit);

let textForm = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function InputData(e) {
  textForm = { email: email.value, message: message.value };
  localStorage.setItem(FORM_KEY, JSON.stringify(textForm));
}

function reloadPage() {
  if (textForm) {
    email.value = textForm.email || '';
    message.value = textForm.message || '';
  }
}

function formSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
  textForm = {};
}