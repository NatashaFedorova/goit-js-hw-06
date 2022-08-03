const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const items = (array, parentEl) => {
  const items = [];

  array.forEach(el => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = `${el}`;
    items.push(liEl);
  });

  parentEl.append(...items);
};

items(ingredients, ingredientsEl);

console.log(ingredientsEl.children);
