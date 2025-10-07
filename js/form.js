import Bug from './bug.js';
import { agregarBug } from './storage.js';

const form = document.getElementById('bugForm');
const nombreJuegoInput = document.getElementById('nombreJuego');
const plataformaSelect = document.getElementById('plataforma');
const tipoBugSelect = document.getElementById('tipoBug');
const descripcionTextarea = document.getElementById('descripcion');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombreJuego = nombreJuegoInput.value.trim();
    const plataforma = plataformaSelect.value;
    const tipoBug = tipoBugSelect.value;
    const gravedadSeleccionada = document.querySelector('input[name="gravedad"]:checked');
    const descripcion = descripcionTextarea.value.trim();

    if (!nombreJuego || !plataforma || !tipoBug || !gravedadSeleccionada || !descripcion) {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (descripcion.length > 500) {
        alert('La descripción no puede superar los 500 caracteres');
        return;
    }

    const gravedad = gravedadSeleccionada.value;
    const nuevoBug = new Bug(nombreJuego, plataforma, tipoBug, gravedad, descripcion);

    agregarBug(nuevoBug);
    alert('Bug reportado con éxito');

    form.reset();
});