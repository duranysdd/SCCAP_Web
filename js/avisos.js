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


        window.location.href = "../html/descarga.html";
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', submitForm);
