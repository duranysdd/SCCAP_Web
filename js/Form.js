import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { auth, firestore } from './firebase.js';
import { doc, setDoc, query, where, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const formcontainer = document.querySelector('#registration-form');
const errorMessage = document.querySelector('#error-message');

formcontainer.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = formcontainer['emailInput'].value;
    const username = formcontainer['username'].value;
    const password = formcontainer['passwordInput'].value;

    // Verificar si el correo electrónico ya está en uso
    const emailQuery = query(collection(firestore, "usuarios"), where("email", "==", email));
    const emailSnapshot = await getDocs(emailQuery);

    if (!emailSnapshot.empty) {
        errorMessage.textContent = 'El correo electrónico ya está en uso';
        errorMessage.style.display = 'block';
        return;
    }

    // Verificar si el nombre de usuario ya está en uso
    const usernameQuery = query(collection(firestore, "usuarios"), where("username", "==", username));
    const usernameSnapshot = await getDocs(usernameQuery);

    if (!usernameSnapshot.empty) {
        errorMessage.textContent = 'El nombre de usuario ya está en uso';
        errorMessage.style.display = 'block';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Usuario creado', user);

        const userDocRef = doc(firestore, "usuarios", user.uid);

        await setDoc(userDocRef, {
            email: email,
            username: username
        });

        window.location.href = "/html/descarga.html";
    } catch (error) {
        console.error('Error al crear usuario', error);
    }
});
