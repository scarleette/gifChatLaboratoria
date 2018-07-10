function registrarConFireBase() {
    const correo = email.value;
    const clave = password.value;
    firebase.auth().createUserWithEmailAndPassword(correo, clave)
    .then(response => {
        console.log('usuario creado con exito');
    })
    .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
};

function loginConFireBase() {
    const correo = email.value;
    const clave = password.value;
    firebase.auth().signInWithEmailAndPassword(correp, clave)
    .then(response => {
        console.log('usuario creado con exito');
    })
    .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
    })
};