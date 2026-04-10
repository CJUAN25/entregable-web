console.log("¡El archivo JavaScript de LUDOS está funcionando correctamente!");

/* 1. GALERÍA DE IMÁGENES */


function cambiarFotoModal(rutaDeLaFoto) {
    
    // Paso 1: 
    let imagenDestino = document.getElementById('imagenEnElMarco');
    
    // Paso 2:
    imagenDestino.src = rutaDeLaFoto;
    
}

/*2. VALIDACIONES DE FORMULARIO (Página Contacto) */

function validarFormulario(evento) {
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    let cajaError = document.getElementById('mensajeError');

    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
        cajaError.style.display = "block";
    } else {
        cajaError.style.display = "none";
        
        alert("¡Gracias " + nombre + "! Hemos recibido tu mensaje. Nos contactaremos pronto a " + correo);
        
        document.getElementById('formularioContacto').reset();
    }
}