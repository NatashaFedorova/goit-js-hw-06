function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

const colorChangerHandler = () => {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.color.textContent = getRandomHexColor();
};

refs.btnChangeColor.addEventListener('click', colorChangerHandler);
