/*
Los operadores aritmeticos son:  
Suma = +
Resta = -
Division = / 
Multiplicación = *
Modulo = %
Incremento = ++
Decremento = --
Asignación = +=, -=, *=, /=
Comparación: ==, ===
La comparación doble no compara tipos mientras  que el triple si compara  tipos.

Toca tener en cuenta que el incremento y decremento tienen un posty  un pre */
const par = (a) =>{
    if(a % 2 == 0){
        console.log(`${a} es par`);
    }else{
        console.log(`${a} es impar`);
    }
}
par(4);

/*
El operador ternario es muy importante ya que nos permite agilizar el codigo a la hora de escribir
y leerlo, se utiliza de la siguiente forma: 
let nombreTernario = (condicion) ? sesecumple : nosecumple
De esta manera "nombreTernario" adoptara la forma segun la condicion puesta, esta forma puede ser numerica,
string o booleana. 
Ejemplo: 

*/

let ternarioPar = (10%2 == 0) ? "Es par" : "Es impar";
console.log(ternarioPar);
/*
Recuerda usar los operadores && (and) y || (or) los cuales sirven mucho para las comparaciónes
*/
let descanso
let vacaciones = false
let descansos = (vacaciones == true || descanso == true) ? "Puede asistir" : "No puede asistir";
console.log(descansos);
