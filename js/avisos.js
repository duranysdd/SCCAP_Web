const form = document.getElementById('registration-form');


async function submitForm(e) {
    e.preventDefault(); 

    const email = form.elements['emailInput'].value;
    const password = form.elements['passwordInput'].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);

        
        alert("¡Cuenta creada con éxito!");

        // Redirigir a la página de inicio
        window.location.href = "/html/";
    } catch (error) {
        console.log(error);
    }
}

// Agregar evento de envío al formulario
form.addEventListener('submit', submitForm);