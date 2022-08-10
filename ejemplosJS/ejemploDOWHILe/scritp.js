const num = parseInt(Math.random()* 5);

let dato;

do {
    dato = prompt("Decime un numero ? ");
} while (dato != num);

console.log(`El numero era ${num}`)