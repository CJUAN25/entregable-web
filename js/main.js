
console.log("¡El archivo JavaScript de LUDOS está funcionando correctamente!");

/* ==========================================
   1. GALERÍA DE IMÁGENES (Página Recursos)
   ========================================== */
function cambiarFotoModal(rutaDeLaFoto) {
    let imagenDestino = document.getElementById('imagenEnElMarco');
    imagenDestino.src = rutaDeLaFoto;
}

/* ==========================================
   2. VALIDACIONES DE FORMULARIO (Página Contacto)
   ========================================== */
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

/* ==========================================
   3. ANIMACIÓN EN CASCADA (Página Nosotros)
   ========================================== */
document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll(".tarjeta-animada");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); 
                observer.unobserve(entry.target); 
            }
        });
    });

    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});