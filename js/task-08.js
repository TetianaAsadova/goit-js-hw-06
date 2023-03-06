const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.currentTarget.email.value === "" || e.currentTarget.password.value === "") {
        console.error("Please fill in all the fields!");
    } else {
        const { email, password } = e.currentTarget.elements;
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        e.currentTarget.reset();
    }
});
