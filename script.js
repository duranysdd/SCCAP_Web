const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function validateForm() {
    var checkbox = document.getElementById("aceptoTerminos");
    if (!checkbox.checked) {
        alert("Debes aceptar los términos y condiciones para registrarte.");
        return false; // Evita que el formulario se envíe
    }
    return true; // Permite que el formulario se envíe si se ha marcado el checkbox
}

function validaNumericos(event) {
    if(event.charCode >= 41 && event.charCode <= 57){
        return true;
    }
    return false;
}
