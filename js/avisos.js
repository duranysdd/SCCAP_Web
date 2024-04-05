function submitForm() {
    var nombre = document.getElementById("nombreInput").value.trim();
    var apellidoPaterno = document.getElementById("apellidoPaternoInput").value.trim();
    var apellidoMaterno = document.getElementById("apellidoMaternoInput").value.trim();
    var edad = document.getElementById("edadInput").value.trim();
    var telefono = document.getElementById("telefonoInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var password = document.getElementById("passwordInput").value.trim();

    if (nombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || edad === '' || telefono === '' || email === '' || password === '') {
        document.getElementById("error-message").style.display = 'block';
    } else {
        document.getElementById("error-message").style.display = 'none';
        // Aquí puedes enviar el formulario o realizar cualquier otra acción que necesites
        // document.getElementById("registration-form").submit();
    }
}

function validaEdad(event) {
    var keyCode = event.keyCode;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
        event.preventDefault();
        return false;
    }
    return true;
}

function validaNumericos(event) {
    var keyCode = event.keyCode;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 32) {
        event.preventDefault();
        return false;
    }
    return true;
}
