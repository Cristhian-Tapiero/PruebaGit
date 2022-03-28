//La diferencia de un objeto con una variable normal son la cantidad de metodos que se pueden usar con dichos datos primitivos
let persona = {
    nombre: "Cristhian",
    apellido: "Tapiero",
    cedula: 1013098828,
    //Para evitar la redundancia en el codigo podemos usar un metodo el cual tiene forma de funcion dentro del objeto:
    miFuncion: function(){
        return this.nombre + " " + this.apellido;
    }
}
//Para acceder a una propiedad del objeto solo es escribir el nombre del objeto seguido de un punto y la propiedad que queremos extraer:
console.log(persona.nombre);
console.log(persona.miFuncion());
//Para crear objetos de manera repetitiva y poco ortodoxa podemos usar:
let persona2 = new Object()
persona2.nombre = "David"
persona2.apellido = "Padilla"
persona2.cedula = 1013098135
console.log(persona2);
//Se puede usar get para no usar la forma de funcion
let Objeto = {
    nombre: "Mesa",
    añoCompra: 1989,
    añoVenta: 2000,
    //Tambien se puede establecer un metodo set
    get antiguedad(){
        return this.añoVenta - this.añoCompra
    },
    get mayus(){
        return this.nombre.toUpperCase()
    },
    set mayus(mayus){
        this.nombre = mayus.toUpperCase()
        return this.nombre
    }
}
for (cosa in Objeto){
    console.log(Objeto[cosa]);
}
//Finalmente se puede hacer un constructor de objetos en forma de funcion

function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}
let padre = new Persona("Juan","Agudelo")
//Usar prototype para hacer elementos que pueden existir o pueden ser necesarios
Persona.prototype.telefono = 0
//Tambien el call para llamar metodos dentro de otros objetos
console.log(persona.miFuncion.call(persona2));
//En su defecto usar apply que funciona de forma similar pero con un array lleno de los parametros de la funcion
console.log(persona.miFuncion.apply(persona2))