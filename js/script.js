// Script general para el sitio web de Cristian
// Puedes agregar más funciones si tu profesor lo pide

// Mensaje simple al cargar la página
console.log("Sitio web cargado correctamente.");

// Validación básica del formulario de contacto
const formulario = document.querySelector('.formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor completa todos los campos antes de enviar.');
            event.preventDefault();
        } else {
            alert('Tu mensaje ha sido enviado. ¡Gracias por contactarme!');
        }
    });
}