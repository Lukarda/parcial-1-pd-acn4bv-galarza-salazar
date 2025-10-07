class Bug {
    constructor(nombreJuego, plataforma, tipo, gravedad, descripcion) {
        this.id = Date.now() + Math.random();
        this.nombreJuego = nombreJuego;
        this.plataforma = plataforma;
        this.tipo = tipo;
        this.gravedad = gravedad;
        this.descripcion = descripcion;
        this.fecha = new Date().toLocaleString('es-AR');
    }

    obtenerResumen() {
        return `${this.nombreJuego} - ${this.plataforma} - ${this.tipo}`;
    }
}

export default Bug;