// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  input: document.querySelector('input'),
  dataCreate: document.querySelector('[data-create]'),
  dataDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const dataInputChangeHandler = () => refs.input.value;

const boxesArr = [];

const createBoxes = amount => {
  while (boxesArr.length < amount) {
    boxesArr.push(
      `<div class="box" style="border: 1px solid #000000; background-color: ${getRandomHexColor()}; width: 30px; height: 30px; margin: 5px"></div>`
    );
  }

  refs.boxes.innerHTML = boxesArr
    .map((el, idx) => el.replaceAll('30px', `${30 + 10 * idx}px`))
    .join('');
};

const createBtnClickHandler = () => {
  createBoxes(dataInputChangeHandler());
};

// очищає вміст div#boxes ================================
const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
};

// кнопка-тригер видалення блоків==========================
const destroyBtnClickHandler = () => {
  destroyBoxes();
};

refs.input.addEventListener('change', dataInputChangeHandler);
refs.dataCreate.addEventListener('click', createBtnClickHandler);
refs.dataDestroy.addEventListener('click', destroyBtnClickHandler);
