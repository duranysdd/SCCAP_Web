const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

console.log('hello world');

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