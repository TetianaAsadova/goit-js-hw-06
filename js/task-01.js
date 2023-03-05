const ulCategoriesRef = document.querySelector('#categories');

const allCategoriesRef = ulCategoriesRef.querySelectorAll('.item');

console.log(`Number of categories: ${ allCategoriesRef.length }`);

allCategoriesRef.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.childElementCount}`);
});