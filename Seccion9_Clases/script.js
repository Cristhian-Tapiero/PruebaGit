//Los objetos son instancias de las clases
//Las clases tienen nombre, atributos y metodos
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //Para crear un metodo get y/o set se hace fuera del constructor
    get _nombre(){
        return this.nombre + " " + this.apellido
    }
    set _nombre(_nombre){
        this.nombre = _nombre
    }
}
let persona1 = new Persona("Juan", "Agudelo");
for (car in persona1){
    console.log(persona1[car]);
}
console.log(persona1._nombre);