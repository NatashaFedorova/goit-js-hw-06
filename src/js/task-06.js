const input = document.querySelector('#validation-input');

const inputValidationHandler = e =>
  Number(e.currentTarget.value.length) === Number(input.dataset.length)
    ? input.classList.add('valid')
    : input.classList.add('invalid');

input.addEventListener('blur', inputValidationHandler);
