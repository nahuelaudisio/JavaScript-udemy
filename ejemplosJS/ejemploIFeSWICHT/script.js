
//no se recomienda utilizar estos IF añidados
//let edad = prompt("cual es tu edad?")

//if(edad >= 29){
//    console.log("sos un milenian")
//}else{
//if(edad == 0){
//    console.log("usted aun no tiene años de vida")
//}else{
 //   console.log("sos joven aún")
//}
//}

// IF TERNARIO

//let edad = prompt("cual es tu edad?")

//let mensaje = (edad >= 29) ? "sos un adulto" : "sos un joven" ;
// o se puede hacer esto 
//let mensaje = (edad >= 29) ? console.log("sos un adulto") : console.log("sos un joven") ;
//console.log(mensaje);



//ejemplo con un swicht


let edad = prompt("cual es tu edad?")

switch(edad){
    case"0":
            console.log("tenes cero años")
            break;

    case"1":
    console.log("tenes 1 año")
    break;
    case"2":
    console.log("tenes 2 años")
    break;

    default:
        console.log("no tenes 0,2 o 1 año")
        break;
}