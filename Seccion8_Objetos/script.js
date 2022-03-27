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
