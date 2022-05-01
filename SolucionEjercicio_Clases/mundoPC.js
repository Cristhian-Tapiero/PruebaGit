class Computadora{
    static contadorComputadores = 0
    constructor(nombre){
        this._nombre = nombre
        this._teclado 
        this._raton 
        this._monitor
        this._idComputador = ++Computadora.contadorComputadores
    }
    get idComputador(){
        return this._idComputador
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    agregarTeclado(teclado){
        this._teclado = teclado.toString()
    }
    agregarRaton(raton){
        this._raton = raton.toString()
    }
    agregarMonitor(monitor){
        this._monitor = monitor.toString()
    }
    toString(){
        return `${this.idComputador}- Nombre: ${this.nombre} \n \tMonitor: ${this._monitor} \n \tTeclado: ${this._teclado}\n\tRaton: ${this._raton}`
    }
}
class Orden{
    static contadorOrdenes = 0
    constructor(){
        this._computadoras = []
        this._idOrden = ++Orden.contadorOrdenes
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computador){
        this._computadoras.push(computador)
    }
    mostrarOrden(){
        let productosOrden = ""
        for(let producto of this._computadoras){
            productosOrden += `\n ${producto.toString()}`
        }
        console.log(`Orden ${this.idOrden}, Productos: ${productosOrden}`)
    }
    toString(){
        return this.mostrarOrden()
    }
}
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca 
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    toString(){
        return `Tipo de entrada: ${this.tipoEntrada}, Marca: ${this.marca}`
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRatones = ++Raton.contadorRatones
    }
    get idRatones(){
        return this._idRatones
    }
    toString(){
        return `${this._idRatones}, ${super.toString()}`
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca)
        this._idTeclado = ++Teclado.contadorTeclados 
    }
    get idTeclado(){
        return this._idTeclado
    }
    toString(){
        return `${this._idTeclado}, ${super.toString()}`
    }
}
class Monitor{
    static contadorMonitores = 0
    constructor(marca, tamano){
        this._marca = marca
        this._tamano = tamano
        this._idMonitor = ++Monitor.contadorMonitores
    } 
    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    get tamano(){
        return this._tamano
    }
    set tamano(tamano){
        this._tamano = tamano
    }
    toString(){
        return `${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamano}`
    }
}
let raton1 = new Raton("Bluethoot","HP")
console.log(raton1.toString())
let monitor1 = new Monitor("Lenovo", "15")
console.log(monitor1.toString());
let teclado1 = new Teclado("USB", "Genius")
console.log(teclado1.toString());
let computador1 = new Computadora("Mostro")
computador1.agregarMonitor(monitor1)
computador1.agregarRaton(raton1)
computador1.agregarTeclado(teclado1)
console.log(computador1.toString());
let computador2 = new Computadora("HP")
computador2.agregarMonitor(monitor1)
computador2.agregarRaton(raton1)
computador2.agregarTeclado(teclado1)
let orden = new Orden()
orden.agregarComputadora(computador1)
orden.agregarComputadora(computador2)
orden.mostrarOrden()