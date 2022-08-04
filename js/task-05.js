const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const changeOutputHandler = () => {
  refs.output.textContent = event.currentTarget.value || 'Anonymous';
};

refs.input.addEventListener('input', changeOutputHandler);
