// Variables globales
let formato24h = true;
let estiloActual = 'default';

// Elementos DOM
const horaElement = document.getElementById('hora');
const minutoElement = document.getElementById('minuto');
const segundoElement = document.getElementById('segundo');
const fechaElement = document.getElementById('fecha');
const btnFormato = document.getElementById('btn-formato');
const btnEstilo = document.getElementById('btn-estilo');
const relojContainer = document.querySelector('.reloj-container');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
    
    // Event listeners
    btnFormato.addEventListener('click', cambiarFormato);
    btnEstilo.addEventListener('click', cambiarEstilo);
});

// Función para actualizar el reloj
function actualizarReloj() {
    const ahora = new Date();
    
    // Obtener horas, minutos y segundos
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    // Formatear horas según el formato seleccionado
    let periodo = '';
    if (!formato24h) {
        periodo = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12 || 12;
    }
    
    // Actualizar elementos DOM
    horaElement.textContent = horas.toString().padStart(2, '0');
    minutoElement.textContent = minutos;
    segundoElement.textContent = segundos;
    
    // Actualizar período si es necesario
    if (formato24h) {
        document.querySelectorAll('.periodo').forEach(el => el.remove());
    } else {
        // Crear o actualizar elemento de período
        let periodoElement = document.querySelector('.periodo');
        if (!periodoElement) {
            periodoElement = document.createElement('span');
            periodoElement.className = 'periodo';
            relojContainer.classList.add('formato-12h');
            segundoElement.after(periodoElement);
        }
        periodoElement.textContent = periodo;
    }
    
    // Actualizar fecha
    actualizarFecha(ahora);
    
    // Aplicar animaciones
    aplicarAnimaciones(segundos);
}

// Función para actualizar la fecha
function actualizarFecha(fecha) {
    const opciones = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
    };
    const fechaTexto = fecha.toLocaleDateString('es-ES', opciones);
    
    // Capitalizar primera letra
    fechaElement.textContent = fechaTexto.charAt(0).toUpperCase() + fechaTexto.slice(1);
    
    // Animación de la fecha
    fechaElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        fechaElement.style.transform = 'scale(1)';
    }, 300);
}

// Función para aplicar animaciones
function aplicarAnimaciones(segundos) {
    // Animación en los segundos (ya manejada por CSS)
    
    // Animación adicional cada 10 segundos
    if (segundos % 10 === 0) {
        relojContainer.style.transform = 'rotate(0.5deg)';
        setTimeout(() => {
            relojContainer.style.transform = 'rotate(-0.5deg)';
            setTimeout(() => {
                relojContainer.style.transform = 'rotate(0)';
            }, 50);
        }, 50);
    }
}

// Función para cambiar entre formato 12h y 24h
function cambiarFormato() {
    formato24h = !formato24h;
    btnFormato.textContent = formato24h ? 'Formato 12h' : 'Formato 24h';
    actualizarReloj();
    
    // Animación del botón
    btnFormato.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnFormato.style.transform = 'scale(1)';
    }, 150);
}

// Función para cambiar entre estilos
function cambiarEstilo() {
    if (estiloActual === 'default') {
        relojContainer.classList.add('estilo-alternativo');
        estiloActual = 'alternativo';
        btnEstilo.textContent = 'Estilo Clásico';
    } else {
        relojContainer.classList.remove('estilo-alternativo');
        estiloActual = 'default';
        btnEstilo.textContent = 'Estilo Moderno';
    }
    
    // Animación del botón
    btnEstilo.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btnEstilo.style.transform = 'scale(1)';
    }, 150);
}