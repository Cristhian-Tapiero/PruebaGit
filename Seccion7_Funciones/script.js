//Las funciones de JS  se escriben segun ECMAScript6 como una  constante, a esto se le conoce como arrow function
const funcion = () => {
    console.log("Esto es una funcion");
};
//Tambien se puede utilizar la palabra reservada function, la cual es la forma antigua de realizar este proceso
function funcion2(){
    console.log("Hola mundo, esto es  una funcion. ");
};
//Para  ejecutar una funcion se utiliza el nombre de la funcion. En su defecto tambien se tienen que pasar las instancias establecidas
funcion2();
//Una parte importante de las funciones es la palabra reservada return la cual asigna una resultado de retorno final.
function suma(a,b){
    return a+b;
}
let number = suma(8,2);
console.log(number);
//funcion de tipo expresion: Es otra forma de declarar funciones. 
let x = function (x,y){return x+y};
let result = x(1,2);
console.log(result);
//Existen las funciones self invoking las cuales no son reutilizables pero son utiles en ciertoss tipos de trabajos de desarrollo web, se utiliza asi:
(function () {
    console.log("Ejecutando la funcion");
})();
//Para sumar argumentos indeterminados en una funcion podemos usar:
function sumarArgumentos() {
    let total = 0;
    for(let i = 0; i< arguments.length; i++){
        total+= arguments[i];
    }
    return total;
}
//Recuerda usar return y solamente funciona para la forma de funcion function nombre(){...}
console.log(sumarArgumentos(1,2,3,4,5,6,7,8,9,100));
//Normalmente las funciones no onservan los cambios hechos EJM:
let w = 10;
function cambiarValorVariable(a){
    a = 30;
}
cambiarValorVariable(w);
console.log(w);
//Pero si lo aplicamos a un objeto si puede alterar valores: 
const objetoPersona = {
    nombre: "Cristhian",
    apellido: "Tapiero"
}
function cambiarNombreObjeto(o1){
    o1.nombre = "David";
    o1.apellido = "Padilla"
}
cambiarNombreObjeto(objetoPersona);
console.log(objetoPersona);