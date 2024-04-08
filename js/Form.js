import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebase.js'

const formcontainer = document.querySelector('#registration-form')

formcontainer.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = formcontainer['emailInput'].value
    const password = formcontainer['passwordInput'].value

    //console.log(name, apPat, apMat, edad, telefono, email, password)

    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
    } catch (error) {
        console.log(error)
    }
} )

