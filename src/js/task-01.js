const refs = {
  listOfCategories: document.querySelector('#categories'),
  categories: document.querySelectorAll('.item'),
};

const amountCategories = refs.categories.length;

console.log(`Number of categories: ${amountCategories}`);

const aboutCategories = refs.categories.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
