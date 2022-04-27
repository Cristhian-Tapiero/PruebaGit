class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido
    }
    toString(){
        return this.nombreCompleto()
    }
    //Un metodo static solo se relaciona con la clase mas no con los elementos creados asociados a la clase
    static saludar(Persona){
        console.log("Saludos al metodo static " + Persona.nombre);
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, cargo){
        super(nombre,apellido)
        this.cargo = cargo
    }
    get cargo(){
        return this._cargo
    }
    set cargo(cargo){
        this._cargo = cargo
    }
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._cargo
    }
}
let empleado1 = new Empleado("Cristhian","Tapiero","Sistemas")
console.log(empleado1.toString());
//El uso del static no se haria con empleado1 sino con Persona, es muy util a la hora de generar nuevos items
class Fecha{
    //Variables static: 
    static contadorObjetos = 0
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes 
        this.ano = ano
        //Static nunca sera llamado con le nombre de un objeto creado sino con la clase en si. 
        //Esta linea sirve para contabilizar cuantos elementos se han creado en base a esta clase, incluidos los hijos debido al nexo que existe con el constructor de la clase padre. 
        Fecha.contadorObjetos++
    }
    static hoy(){
        let fecha = new Date()
        let dia = fecha.getDate()
        let mes = fecha.getMonth() + 1 //Los meses empiezan a contar desde 0, por eso el +1
        let ano = fecha.getFullYear()
        return new Fecha(dia, mes, ano)
    }
}
console.log(Fecha.hoy());
let ayer = new Fecha(25,4,2022)
console.log(Fecha.contadorObjetos);
//Las clases hijas se ven afectadas por las variables y metodos static debido a su relación de sobreescritura. 
