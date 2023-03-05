const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validGreenBorder();
    } else {
        invalidRedBorder();
    }
});
function validGreenBorder() {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
};

function invalidRedBorder() {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
};