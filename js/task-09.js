const changeColorBtnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', newBackgroundColor);

function newBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


