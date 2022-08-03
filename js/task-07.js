const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
const changeFontSizeHandler = e => (refs.text.style.fontSize = `${e.currentTarget.value}px`);

refs.fontSizeControl.addEventListener('input', changeFontSizeHandler);
