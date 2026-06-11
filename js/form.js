function validateName() {

    const name = document.getElementById("name").value;

    const error =
        document.getElementById("nameError");

    const nameRegex =
        /^[A-Z][a-zA-Z]{2,}$/;

    if (nameRegex.test(name)) {
        error.textContent = "";
    }
    else {
        error.textContent =
            "Name should start with a Capital Letter and have minimum 3 characters";
    }
}