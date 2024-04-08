import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from './firebase.js';

const formcontainer = document.querySelector('#registration-form');

formcontainer.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = formcontainer['emailInput'].value;
    const password = formcontainer['passwordInput'].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Usuario creado:', user);

        // Redirigir a la otra interfaz aquí
        // Por ejemplo, redirigir a la página de inicio después del registro
        window.location.href = "/html/descarga.html";
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
});
