// 1. Configuración del Temporizador (15 de septiembre de 2026, a las 00:00:00)
const fechaCumple = new Date("2026-09-15T00:00:00").getTime();

const actualizarTemporizador = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaCumple - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

    // Si llega a cero, detener y mostrar 00
    if (distancia < 0) {
        clearInterval(actualizarTemporizador);
        document.getElementById("dias").innerText = "00";
        document.getElementById("horas").innerText = "00";
        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";
    }
}, 1000);

// 2. Lógica para desbloquear los días del 1 al 15
const gridDias = document.getElementById("grid-dias");
const fechaActual = new Date();
const mesActual = fechaActual.getMonth(); // Septiembre es el mes 8 (Enero es 0)
const diaActual = fechaActual.getDate();

for (let i = 1; i <= 15; i++) {
    const enlace = document.createElement("a");
    enlace.innerText = `Día ${i}`;
    
    // Validar si estamos en Septiembre (mes 8) o posterior, y si el día actual es mayor o igual al número del día
    // (Nota: Si el mes es > 8, es decir octubre en adelante, se desbloquean todos)
    const estaDesbloqueado = (mesActual === 8 && diaActual >= i) || (mesActual > 8);

    if (estaDesbloqueado) {
        enlace.href = `dias/dia-${i}.html`;
        enlace.className = "dia-card unlocked";
    } else {
        enlace.href = "#";
        enlace.className = "dia-card locked";
    }

    gridDias.appendChild(enlace);
}
// [Mantén aquí arriba la configuración del Temporizador y la lógica de los Días que ya teníamos]

// ... (Tu código anterior del setInterval y el for loop) ...

// --- NUEVO: Generador de Globos y Detalles BTS ---

function crearParticulasBts() {
    // Array con los elementos que van a flotar
    const iconos = ['💜', '🎈', '✨', '🎵', '💜']; 

    setInterval(() => {
        const item = document.createElement('div');
        item.className = 'floating-item';
        
        // Elegir un icono al azar
        item.innerText = iconos[Math.floor(Math.random() * iconos.length)];
        
        // Posición horizontal aleatoria (0 al 100% del ancho de la pantalla)
        item.style.left = Math.random() * 100 + 'vw';
        
        // Duración de la animación aleatoria (entre 4 y 8 segundos para que unos vayan más rápido que otros)
        const duracion = Math.random() * 4 + 4;
        item.style.animationDuration = duracion + 's';
        
        // Tamaño aleatorio
        item.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        
        // Agregarlo al cuerpo del HTML
        document.body.appendChild(item);

        // Borrar el elemento del HTML una vez que terminó de flotar para no saturar la memoria
        setTimeout(() => {
            item.remove();
        }, duracion * 1000);
        
    }, 600); // Genera un nuevo elemento cada 600 milisegundos
}

// Iniciar los globos
crearParticulasBts();