function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        document.getElementById('warnings').innerHTML = 'Por favor complete todos los campos.';
        return false;
    } else {
        return true;
    }
}