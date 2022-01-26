//Se genera hosting
/*
js genera hoisting antes de correr el código,
haciendo
var a;
a = 2;
consol.log(a); //> 2
*/
a = 2;
var a;
console.log(a); //2

//El hoisting se genera en la declaración y no en
//la inicialización
console.log(b); //undefined
var b = 10;

//HOISTING EN FUNCIONES
function nameDog (name){
    console.log(name);
}

nameDog('Elmo'); //Elmo

//Cambiando el orden se genera el hoisting y no hay problema

printName('Elmo'); //Elmo

function printName(name){
    console.log(name);
}