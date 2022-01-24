/*
ALCANCE GLOBAL O GLOBAL SCOPE
*/

//variables con scope global, no estan dentro de funciones ni bloques
var a = 100;
let b = 'Hello';
const c = 3.14;

const myFunctions = () => {
    console.log(a);
    console.log(b);
    console.log(c);
}

//Al ejecutar la función se puede acceder a las variables sin problema
myFunctions();
//100
//Hello
//3.14

/*
VAR, se puede volver a declarar y reasignar
*/
var m = 100;
var m = '100+';
console.log(m);

/*
LET, no se puede volver a declarar, si reasignar
*/
let a = 400;
a = 300;
console.log(a); //300
let a = 500; //SyntaxError: Identifier 'a' has already been declared

/*
CONST, no se puede volver a declarar, ni a reasignar su valor
*/
const x = 40;
const x = 100;//SyntaxError: Identifier 'x' has already been declared
x = 50; //TypeError: Assignment to constant variable.

/*
ERRORES AL DECLARAR VARIABLES, DONDE SE PUEDEN HACER GLOBALES
*/

//Al declarar la variable sin la palabra reservada, esta se hace global
const hiTo = () => {
    message = 'Hello world!';
}

hiTo();
console.log(message);//Hellow world

//Al hacer doble declaración dentro de una función

const otherFunction = () => {
    var localVar = globalVar = 'I am global';
}

otherFunction();
console.log(globalVar); //I am global







