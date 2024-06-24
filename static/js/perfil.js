document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('perfil-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Aquí puedes enviar los datos del perfil al servidor
            alert('Perfil guardado correctamente');
            // Redireccionar a otra página si es necesario
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input');

        inputs.forEach(function (input) {
            if (!input.validity.valid) {
                isValid = false;
                showErrorMessage(input);
            } else {
                hideErrorMessage(input);
            }
        });

        return isValid;
    }

    function showErrorMessage(input) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage.classList.contains('error-message')) {
            errorMessage.style.display = 'block';
        }
    }

    function hideErrorMessage(input) {
        const errorMessage = input.nextElementSibling;
        if (errorMessage.classList.contains('error-message')) {
            errorMessage.style.display = 'none';
        }
    }
});
