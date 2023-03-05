const sizeControle = document.querySelector('#font-size-control');

const textControl = document.querySelector('#text');

textControl.style.fontSize = sizeControle.value + "px";
sizeControle.addEventListener('input', (e) => {
    textControl.style.fontSize = sizeControle.value + "px";
});