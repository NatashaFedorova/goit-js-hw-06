const input = document.querySelector('#validation-input');

const inputValidationHandler = e => {
  input.classList.remove(input.classList.contains('valid') ? 'valid' : 'invalid');

  if (Number(e.currentTarget.value.length) !== Number(input.dataset.length)) {
    input.classList.add('invalid');
  } else {
    input.classList.add('valid');
  }
};

input.addEventListener('blur', inputValidationHandler);
