// UC1 - Name Validation

function validateName() {

    const name =
        document.getElementById("name").value;

    const error =
        document.getElementById("nameError");

    const nameRegex =
        /^[A-Z][a-zA-Z]{2,}$/;

    if(nameRegex.test(name)){
        error.textContent = "";
    }
    else{
        error.textContent =
        "Name should start with Capital Letter and contain minimum 3 characters";
    }
}


// UC2 - Email Validation

function validateEmail(){

    const email =
        document.getElementById("email").value;

    const error =
        document.getElementById("emailError");

    const emailRegex =
        /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(email)){
        error.textContent = "";
    }
    else{
        error.textContent =
        "Enter a valid email address";
    }
}