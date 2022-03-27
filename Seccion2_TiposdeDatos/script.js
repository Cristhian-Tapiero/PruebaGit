/*
Tipos de datos primitivos:
String: Son todos los caracteres alfanumericos tambien conocidos como una cadena de texto
Int: Son conocidos como los numeros enteros son aquellos que no contienen punto flotante
Float y Double: Son numeros de precisión aritmetica, es decir, tienen decimales, la diferecia entre estos dos datos es que el double es capaz de ejecutar operaciones de manera mas acertada. 
Objetos :Son capaces de almacenar mas informacion en una sola variable siendo mas eficiente que un String y un entero a pesar de estar compuesto por estos. 
Boolean: True y False
Ejemplo:
*/
let nombre = String("Cristhian Tapiero")
let numero = parseInt(32)
let decimal = parseFloat(3.4)
console.log(nombre);
console.log(numero);
console.log(decimal);
let objeto = {
    nombre: "Cristhian",
    edad: 18,
    institucion: "'Universidad Libre"
}
console.log(objeto);
/* Las variables pueden alterar su valor, caso contrario con las constantes, se declaran con var o con let (segun ECMA Script6) y las constantes con const*/
nombre = "David Padilla"
console.log(typeof nombre); //Para saber el tipo de variable se puede utilizar typeof


//Symbol: Un tipo de dato symbol es utilizado especificamente para crear un valor unico de una variable
let simbolo = Symbol("Esto es un simbolo");
console.log(simbolo);
//Tipo de dato class, es parecido a los objetos pero permite establecer una regla
class Persona{
    constructor(name, apellido){
        this.name = name,
        this.apellido = apellido
    }
}
// Otro tipo de dato es el undefined o indefinido y es cuando algo no tiene un valor: 
let x;
console.log(typeof x);
// Null es similar a undefined pero representa un dato vacio mas no indefinido
let y = null;
console.log(typeof y);



//Otros tipos de datos mas avanzados son los Arrays y los Empty Strings, los arrays contienen posiciones de elementos contando desde 0:

let marcas = ["Adidas", "Nike", "ETC"];
console.log(marcas);
//Las cadenas vacias o Empty String son los siguientes:
let cadenaVacia = '';
//Para unir dos valores se utiliza el operador +
