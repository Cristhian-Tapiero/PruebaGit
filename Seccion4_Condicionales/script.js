let num = 1
let mes = 5
/* Nuestro primer caso es el condicional mas conocido el cual es if/else
este funciona gracias a estas dos palabras claves donde se pone la condicional fuera del if dentro de parentesis. Se pueden anidar varios condicionales mediante el else if(condicion) tal y como se muestra en el ejemplo:  */

if(num == 1){
    console.log("Uno");
}else if(num == 2){
    console.log("Dos");
}else if(num == 3){
    console.log("Tres");
}else{
    console.log("Numero invalido");
}
/* Nuestro siguiente condicional va a ser el swich case, el case se utiliza cuando requerimos varios valores para una misma condicion, algo asi como el else if pero mucho mas optimizado y se utliza de la siguiente manera:  */

switch (mes){
    case 1:
        console.log("Enero");
        break
    case 2:
        console.log("Febrero");
        break
    case 3:
        console.log("Marzo");
        break
    case 4:
        console.log("Abril");
        break
    case 5:
        console.log("Mayo");
        break
    case 6:
        console.log("Junio");
        break
    case 7:
        console.log("Julio");
        break
    case 8:
        console.log("Agosto");
        break
    case 9:
        console.log("Septiembre");
        break
    case 10:
        console.log("Octubre");
        break
    case 11:
        console.log("Noviembre");
        break
    case 12:
        console.log("Diciembre");
        break
    default: //IMPORTANTE: Al contrario de lenguajes como VB.net no hay case else sino default que lo que va a hacer es asumir un valor en caso de que todo este como si nada hubisese pasado,es decir, como si estuviese default. 
        console.log("Mes equivocado");
        break

}

//Para anidar switch case se puede hacer de la siguiente manera:  

let estacion = 13
switch(estacion){
    case 1: case 2: case 12:
        console.log("Invierno");
        break
    case 3: case 4: case 5:
        console.log("Primavera");
        break
    case 6: case 7: case 8:
        console.log("Verano");
        break
    case 9: case 10: case 11:
        console.log("Otoño");
        break
    default:
        console.log("Mes inexistente");
        break
}
//Para todo hay una solución mas rapida, lo importante es no rendirse en la busqueda de dicha solución. 