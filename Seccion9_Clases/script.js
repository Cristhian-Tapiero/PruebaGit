//Los objetos son instancias de las clases
//Las clases tienen nombre, atributos y metodos
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //Para crear un metodo get y/o set se hace fuera del constructor
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    //Para hacer un metodo dentro de una clase:
    nombreCompleto(){
        return this._nombre +" "+this._apellido
    }
    //Metodo toString()
    toString(){
        return this.nombreCompleto()
    }
}
let persona1 = new Persona("Juan", "Agudelo");
for (car in persona1){
    console.log(persona1[car]);
}
console.log(persona1._nombre);
//Una clase practicamente es una plantilla para la creacion de objetos.
// Herencia de clases se utiliza con el metodo Extends 
class Empelado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido) //Llamamos a la clase padre
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Para heredar un metodo utilizamos el nombre de la funcion con el objeto necesario
    //Sobreescritura en JavaScript, un metodo ya definido  en la clase padre desconoce otros atributos de la clase hija en esta caso la funcion nombreCompleto desconoce el atributo departamento
    nombreCompleto(){
        //Tiene que tener el mismo nombre de lo contrario seria creacion de nuevo metodo
        //Utilizamos super.nombreFuncion() para no tener que volver a escribir los mismos parametros escritos anteriormente
        return super.nombreCompleto() + ", " + this._departamento
    }
}
//Para crear un parametro con la clase hija tenemos que utilizar la palabra reservada super
let persona2 = new Empelado ("Cristhian", "Tapiero", "Ingenieria")
console.log(persona2);
//Al ser definido en la clase padre no hay ingun inconveniente con la funcion:
console.log(persona2.nombreCompleto());
//Clase Object en JavaScript
console.log(persona2.toString()); //Esto funciona de esta manera debido a polimorfismo de JavaScript por lo tanto no es necesario debido al metodo toString()
