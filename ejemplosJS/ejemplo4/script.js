//ejemplos de Json y uno con un array 

var persona = {
apellido: "Audisio",
nombre: "Nahuel",
nacimiento: new Date("01-02-1995"),
dni: 391853132,
mascota:[ {
                nombre: "Oleg" ,
            apodo: "callejero",
        nacimiento: new Date ("01-01-2022"),
        numeroIdetificatorio: 1234544
        },{
            nombre: "Yoko" ,
            apodo: "no callejero",
            nacimiento: new Date ("01-01-2022"),
            numeroIdetificatorio: 1234544
            }

        ]
};

//otro ejemplo de un JSON
//var mascota = {
//nombre: "Oleg" ,
//apodo: "callejero",
//nacimiento: new Date ("01-01-2022")

///};


console.log(persona); // muestra en consola todo el JSON de persona
console.log(persona.nombre)// 
console.log(persona.mascota[0].nombre)
console.log(persona.mascota[1].nombre)
//console.log(mascota);


class Mascota {
    apodo;
    numeroDeIdentidad;
}

var m = new Mascota();

m.apodo = "Lola y MORA";
m.numeroDeIdentidad = 123546;

console.log(m);