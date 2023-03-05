let counterValue = 0;

const valueRef = document.querySelector('#value');

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    spanValueCounter(counterValue);
});

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    spanValueCounter(counterValue);
});

function spanValueCounter(numberCount) {
    valueRef.textContent = numberCount;
}