// UC1

function validateName() {

    const name = document.getElementById("name").value;
    const error = document.getElementById("nameError");

    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

    error.textContent =
        nameRegex.test(name)
            ? ""
            : "Name should start with Capital Letter and contain minimum 3 characters";
}


// UC2

function validateEmail() {

    const email = document.getElementById("email").value;
    const error = document.getElementById("emailError");

    const emailRegex =
        /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    error.textContent =
        emailRegex.test(email)
            ? ""
            : "Enter a valid email address";
}


// UC3

function validateMobile() {

    const mobile = document.getElementById("mobile").value;
    const error = document.getElementById("mobileError");

    const mobileRegex =
        /^[0-9]{2}\s[0-9]{10}$/;

    error.textContent =
        mobileRegex.test(mobile)
            ? ""
            : "Format should be 91 9876543210";
}


// UC5

function validatePassword() {

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("passwordError");

    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[0-9])(?=[A-Za-z0-9]*[^A-Za-z0-9][A-Za-z0-9]*$).{8,}$/;

    error.textContent =
        passwordRegex.test(password)
            ? ""
            : "Password must contain minimum 8 characters, 1 uppercase letter, 1 number and exactly 1 special character";
}