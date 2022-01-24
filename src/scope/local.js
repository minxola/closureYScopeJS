//VARIABLES LOCALES
const myFunction = () => {
    const msg = 'Hello world';
    console.log(msg);
}

//Ejecutando la función, acceso Local
myFunction(); //Hello world

//Accediendo a la variable, nos devuelve un error ya que no es global
console.log(msg); //ReferenceError, msg is not defined

/*
AMBITO LEXICO DE UNA VARIABLE
*/
var scope = 'I am global';

const scopeFunction = () => {
    var scope = 'I am just a local';
    const otherFunction = () => {
        return scope;
    }
    console.log(otherFunction());
}

//Al ejecutar la función, solo toma la variable local, no reasigna
//el valor de scope, por mas que esté en global, esto es ambito lexico
scopeFunction(); //I am just local

//Al imprimir el scope, este accede a 'scope' global, ya que
//se encuentra en su ambito, y no puede acceder a la variable
//declarada dentro de la función, por ser solo local
console.log(scope); //I am global