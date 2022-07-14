class Persona{
    constructor(n = "David", a = " Olmo " ) {
        this.nombre = n;
        this.apellido = a;
    }
    saludar() {
        alert("Hola soy " + this.nombre + this.apellido)
    } 
    setNombre(nombre) {
        if(this.nombre.length>3) {
            console.warn("ERROR, Mínimo 3 letras");
        }else{
            console.log("Mínimo 3 letras");
        }
    }
    setApellido(apellido) {
        if(this.apellido.length>3) {
            console.warn("ERROR, Mínimo 3 letras");
        }else{
            console.log("Mínimo 3 letras");
        }
    }
    getnombre() {
        return this.nombre;
    }
    getapellido() {
        return this.apellido;
    }
}
 




const yo = new Persona('Torrente', 'Martinez');
yo.getnombre();
yo.getapellido('assasd');
yo.setNombre('ds');
yo.setApellido('ssdawdwa');
yo.saludar('as');
alert(yo.getnombre());
alert(yo.getapellido());