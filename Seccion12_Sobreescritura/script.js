class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre
        this._sueldo = sueldo
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }
    obtenerDetalles(){
        return `Empleado: ${this.nombre}, Sueldo: $${this.sueldo}`
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre,sueldo)
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    obtenerDetalles(){
        return `Gerente, ${super.obtenerDetalles()}, Departamento: ${this.departamento}`
    }
}
let gerente1 = new Gerente("Cristhian",1000, "Sistemas")
console.log(gerente1.obtenerDetalles());
//Permite herear metodos y caracteristicas de las clases padre sin nececsidad de volver a escribir codigo
let empleado1 = new Empleado("David", 2000)
console.log(empleado1.obtenerDetalles());
function imprimir(tipo){
    console.log(tipo.obtenerDetalles())
    if(tipo instanceof Gerente){
        console.log(`Es un objeto del tipo gerente`);
    }else{
        console.log(`Es un objeto del tipo empleado`);
    }
}
imprimir(gerente1)
imprimir(empleado1) //--> Ejemplo del polimorfismo
//Palabra instanceof
