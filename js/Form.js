const formcontainer = document.querySelector('#registration-form')

formcontainer.addEventListener('submit', (e) =>{
    e.preventDefault()

    const name = formcontainer['nombreInput'].value
    const apPat = formcontainer['apellidoPaternoInput'].value
    const apMat = formcontainer['apellidoMaternoInput'].value
    const edad = formcontainer['edadInput'].value
    const telefono = formcontainer['telefonoInput'].value
    const email = formcontainer['emailInput'].value
    const password = formcontainer['passwordInput'].value

    console.log(name, apPat, apMat, edad, telefono, email, password)
} )