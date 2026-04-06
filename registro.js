const form = document.getElementById("formRegistro");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    const errorUser = document.getElementById("errorUser");
    const errorPass = document.getElementById("errorPass");

    errorUser.textContent = "";
    errorPass.textContent = "";

    let valido = true;

    if (user.length < 5) {
        errorUser.textContent = "Mínimo 5 caracteres";
        valido = false;
    }

    if (pass1 !== pass2) {
        errorPass.textContent = "Las contraseñas no coinciden";
        valido = false;
    }

    if (valido) {
        alert("Registro exitoso");
    }
});