//Cuando usamos VAR en loops se genera un CLOSURE involuntario
const myFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}

myFunction(); //10 10 10...10 (10 veces)

/*
En este caso se genera un closure involuntario y la función 
setTimeout(), puede acceder al ambito léxico de la variable i,
así que el momento de ejecutar el console.log(i) accede
a la ultima asignación de i que es 10

Esto se solución declarando la variable con let, lo cual limita
el ámbito léxico de i al bloque generado en cada iteración {...}
*/
const myFunct = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}

myFunct(); //0 1 2 ...9
