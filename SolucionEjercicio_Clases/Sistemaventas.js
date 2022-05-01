class Orden{
    static contadorOrden = 0;
    static get Max_Productos(){
        return 5
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden
        this._productos = []
        this._contadorProductosAgregados = 0
    }
    get idOrden(){
        return this._idOrden
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.Max_Productos){
            this._productos.push(producto)
        }else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
            totalVenta += producto.precio
        }
        return totalVenta
    }
    mostrarOrden(){
        let productosOrden = ""
        for(let producto of this._productos){
            productosOrden += "\n"+producto.toString() + " "
        }
        console.log(`Orden: ${this._idOrden} - Total: ${this.calcularTotal()}, \n Productos: ${productosOrden}`);
    }
}
class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._nombre = nombre
        this._precio = precio
        this._idProducto = ++Producto.contadorProductos
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    toString(){
        return `${this._idProducto}- ${this._nombre}, $${this._precio}`
    }
}
let producto1 = new Producto("Lechuga",1500)
let producto2 = new Producto("Papa", 1800)
let producto3 = new Producto("Sandia", 3800)
let producto4 = new Producto("Mango", 2900)
let producto5 = new Producto("Manzana", 900)
let producto6 = new Producto("Cebolla", 1500)
let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.agregarProducto(producto3)
orden1.agregarProducto(producto4)
orden1.agregarProducto(producto5)
orden1.mostrarOrden()