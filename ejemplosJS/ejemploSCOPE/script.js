//ejemplo con variable TIPO - > LET
let a = 10;

console.log(`valor global de LET antes del If ${a}`);

if(true){
    let a = 30;
    console.log(`valor local de LET en el If ${a}`)
}

console.log(`valor global de LET despues del If ${a}`);

//ejemplo con variable TIPO - > VAR
//var a = 10;

//console.log(`valor global de VAR antes del If ${a}`);

//if(true){
 //   let a = 30;
 //   console.log(`valor local de VAR en el If ${a}`)
//}

//console.log(`valor global de VAR despues del If ${a}`);