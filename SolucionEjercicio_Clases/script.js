class Persona{
    static contadorPersonas = 0
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this._idPersona = ++Persona.contadorPersonas
    }
    get idPersona(){
        return this._idPersona
    }
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
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    nombreCompleto(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} , ${this._edad}`
    }
    toString(){
        return this.nombreCompleto()
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados
        this._sueldo = sueldo
    }
    get idEmpleado(){
        return this._idEmpleado
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }
    toString(){
        return `${super.toString()}, ${this._idEmpleado}, ${this._sueldo}`
    }
}
class Cliente extends Persona{
    static contadorClientes = 0
    static fecha = new Date()
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorClientes
        this._fechaRegistro = Cliente.fecha.getDate() + "/" + (Cliente.fecha.getMonth() + 1) + "/" + Cliente.fecha.getFullYear()
    }
    get idCliente(){
        return this._idCliente
    }
    get fechaRegistro(){
        return this._fechaRegistro
    }
    toString(){
        return `${super.toString()}, ${this._idCliente}, ${this._fechaRegistro}`
    }
}
let persona1 = new Persona("Cristhian","Tapiero",18)
console.log(persona1.toString());
let empleado1 = new Empleado("Katherin","Gaitan",18,20000)
console.log(empleado1.toString());
let cliente1 = new Cliente("Santiago","Ordoñez", 19)
console.log(cliente1.toString());
let cliente2 = new Cliente("David","Padilla",18)
console.log(cliente2.toString());