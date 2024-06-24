document.addEventListener('DOMContentLoaded', function () {
    const alertaMostrada = localStorage.getItem('alertaMostrada');

    const perfilIncompleto = document.getElementById('alerta-perfil');

    if (perfilIncompleto && alertaMostrada !== 'true') {
        perfilIncompleto.style.display = 'block';
    }
});

function cerrarAlerta() {
    const noMostrar = document.getElementById('no-mostrar-alerta').checked;
    if (noMostrar) {
        localStorage.setItem('alertaMostrada', 'true');
    }
    document.getElementById('alerta-perfil').style.display = 'none';
}

localStorage.removeItem('alertaMostrada');