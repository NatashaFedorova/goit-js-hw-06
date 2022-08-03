const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

const decrementBtnClickHandler = () => {
  counter.decrement();
  refs.value.textContent = counter.value;
};

const incrementBtnClickHandler = () => {
  counter.increment();
  refs.value.textContent = counter.value;
};

refs.decrement.addEventListener('click', decrementBtnClickHandler);
refs.increment.addEventListener('click', incrementBtnClickHandler);
