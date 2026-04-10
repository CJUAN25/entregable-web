/* ==========================================
   ARCHIVO PRINCIPAL DE JAVASCRIPT (main.js)
   Proyecto: Semillero LUDOS
   ========================================== */

// Este mensaje nos ayuda a los programadores a saber que el archivo sí está conectado
console.log("¡El archivo JavaScript de LUDOS está funcionando correctamente!");

/* ==========================================
   1. GALERÍA DE IMÁGENES (Página Recursos)
   ========================================== */

/**
 * Función que recibe la ruta de una imagen pequeña y la inyecta 
 * en el modal (marco vacío) para verla en tamaño grande.
 * Esto cumple con el principio DRY (No repetir código).
 */
function cambiarFotoModal(rutaDeLaFoto) {
    
    // Paso 1: Buscamos la etiqueta <img> que está vacía dentro del Modal
    let imagenDestino = document.getElementById('imagenEnElMarco');
    
    // Paso 2: Le cambiamos su atributo 'src' por la nueva ruta que nos enviaron
    imagenDestino.src = rutaDeLaFoto;
    
}

/* ==========================================
   2. VALIDACIONES DE FORMULARIO (Página Contacto)
   ========================================== */

/**
 * Función que se ejecuta cuando el usuario presiona "Enviar Mensaje".
 * Evita que la página se recargue y revisa los datos de forma sencilla.
 */
function validarFormulario(evento) {
    // 1. Evitamos que el formulario intente enviar los datos al servidor (ya que no tenemos Backend)
    evento.preventDefault();

    // 2. Obtenemos los valores que el usuario escribió
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    let cajaError = document.getElementById('mensajeError');

    // 3. Revisión súper básica: ¿Están vacíos?
    // Aunque el HTML dice "required", hacemos una doble revisión en JS para mostrar nuestra propia caja de error.
    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
        // Mostramos el mensaje de error rojo
        cajaError.style.display = "block";
    } else {
        // Escondemos el mensaje de error por si estaba visible
        cajaError.style.display = "none";
        
        // Mostramos una alerta de éxito (simulando el envío)
        alert("¡Gracias " + nombre + "! Hemos recibido tu mensaje. Nos contactaremos pronto a " + correo);
        
        // Limpiamos los campos del formulario
        document.getElementById('formularioContacto').reset();
    }
}