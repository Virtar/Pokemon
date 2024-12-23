function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidData(data, pattern) {
    let dataPattern = pattern;
    return dataPattern.test(data);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formIngreso");

    form.addEventListener("submit", (event) => {
        // Evitar que se envíe el formulario automáticamente
        event.preventDefault();

        // Resetear los mensajes de error
        resetErrorMessages();

        // Validar los campos
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;


        if (email === "") {
            displayErrorMessage("emailError", "Ingrese su correo electrónico.");
            isValid = false;
        } else if (!isValidData(email, emailPattern)) {
            displayErrorMessage("emailError", "El correo electrónico no es válido.");
            isValid = false;
        }

        if (password === "") {
            displayErrorMessage("passwordError", "Ingrese una contraseña.");
            isValid = false;
        } else if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            alert("¡Formulario enviado correctamente!");
            form.reset();
        }
    });
});