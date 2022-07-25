
// ARRAy y tambien soporta otras variables
var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);


// otro array 
var numerosN = [1,2,5,6,4,11,22,false, "RACING CLUB"];
console.log(numerosN);

// transforma un objeto array, a un objeto STRING
// con la propiedad JSON.stringify
console.log(JSON.stringify(numeros));


var personas = [
 {
    nombre: "Elena",
    apellido: "Lopez"
 },
 {
    nombre: "Nahuel",
    apellido: "Audisio"
 },
 {
    nombre: "Noelia",
    apellido: "Audisio"
 }
];

console.log(personas);
console.log(personas[ personas.length-1 ])

///lo que viene acontinuacion, se lo puede aaplicar a la consola de nuestro navegador
// ahora vienen algunas funciones 
personas.reverse(); // hace que un array, invierta el orden de los elementos. modifica el array
// original


personas.forEach( (e)=> console.log(e.nombre))// muestra los elementos de dicho array
// aca por ejemplo muestro solamente el nombre de los elementos de mi array, que recaen en la 
// "e" 

personas.forEach( (e)=> console.log(e))// 
//con esto, muestra todos los elementos con tus respectivos atributos


personas.forEach( (e)=> console.log(e.nombre + " : Persona"))// de esta manera, en la consola aparecera asi:
// -> CONSOLA -> Elena : Persona
//basicamente concatena algo que quieras mostrar


numeros.filter( (e) => e%2==0 )//haciendo esto, hace que con consola muestre solAmEnte los 
// elementos pares del array de numeros. NO MODIFICA EL ARRAY ORIGINAL


numeros = numeros.filter((e) => e%2 == 0 )// con esto, si hago que se modifique el array original


numeros.map((e) => e*10)//con esto hago que los elementos de numeros aparescan multiplicados por 10
// pero no cambia el original
numeros = numeros.map((e) => e*10)// con hago que si cambie el array de numeros original