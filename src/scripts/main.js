// Este archivo contiene el código JavaScript que añade interactividad a la página. 
// Puedes incluir funciones para manejar eventos y manipular el DOM.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('¡Botón clickeado!');
        });
    }
});