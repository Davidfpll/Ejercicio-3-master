class  Persona {
    constructor( n = "David Olmo") {
        this.nombre = n;
    }

    saludar() {
        alert("Hola, soy " + this.nombre)
    }
}

const yo = new Persona();
yo.saludar();

