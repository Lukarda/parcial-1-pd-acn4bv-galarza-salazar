import { obtenerBugs } from './storage.js';

const containerBugs = document.getElementById('containerBugs');
const filtrosContainer = document.getElementById('filtrosContainer');
let filtroActual = 'TODOS';


const crearFiltros = () => {
    const filtros = [
        { nombre: 'TODOS', clase: 'filter-todos' },
        { nombre: 'BAJA', clase: 'filter-baja' },
        { nombre: 'MEDIA', clase: 'filter-media' },
        { nombre: 'ALTA', clase: 'filter-alta' }
    ];

    filtros.forEach(filtro => {
        const btn = document.createElement('button');
        btn.className = `btn-filter ${filtro.clase}`;
        btn.textContent = filtro.nombre;

        btn.addEventListener('click', () => {
            filtroActual = filtro.nombre;
            cargarBugs();
        });

        filtrosContainer.appendChild(btn);
    });
};


const cargarBugs = () => {
    containerBugs.innerHTML = '';

    let bugs = obtenerBugs();

    if (filtroActual !== 'TODOS') {
        bugs = bugs.filter(bug =>
            bug.gravedad.toUpperCase().includes(filtroActual)
        );
    }

    if (bugs.length === 0) {
        containerBugs.innerHTML = '<div class="empty-state">No hay bugs reportados</div>';
        return;
    }

    bugs.forEach(bug => {
        const card = document.createElement('div');
        card.className = 'bug-card';

        const badgeClass = `badge-${bug.gravedad.toLowerCase()}`;

        card.innerHTML = `
      <div class="badge ${badgeClass}">PRIORIDAD ${bug.gravedad.toUpperCase()}</div>
      <div class="bug-title">${bug.nombreJuego} • ${bug.plataforma} • ${bug.tipo}</div>
      <div class="bug-description">${bug.descripcion}</div>
      <div class="bug-date">${bug.fecha}</div>
    `;

        containerBugs.appendChild(card);
    });
};


document.addEventListener('DOMContentLoaded', () => {
    crearFiltros();
    cargarBugs();
});