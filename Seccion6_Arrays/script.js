let autos = new Array ('BMW', 'Mercedes');//Esta es la forma mas antigua de realizar arreglos y se basa en Java
const carros = ['Renault', 'Chevrolet', 'Toyota']; //Esta es la forma ECMAScript6 (ultima versión)
console.log(carros);
console.log(autos);
//Para acceder a los datos se puede usar:
console.log(autos[0]);
//Recordar que el puntero de la RAM empeiza a contar desde 0 por lo tanto para acceder a un elemento de un array en JS se empieza a contar desde 0 para seleccionar el primer numero y array.length - 1 para acceder al ultimo
console.log(carros[carros.length - 1]);
//Para  extraer cada uno de los elementos usamos un ciclo for:
for(let contador = 0; contador < carros.length; contador++){
    console.log(carros[contador]);
}
//Para cambiar datos individuales podemos seleccionar el indice y asignarle un nuevo valor:
console.log(carros[1]);
carros[1] = "Audi";
console.log(carros[1]);
//Para agregar elementos al array podemos usar el metodo push
carros.push("Lamborgini")
console.log(carros);