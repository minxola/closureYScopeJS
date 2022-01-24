/*
BLOCK SCOPE
var, alcance de función, puede ser accedido desde cualquier parte de la función
let, alcance de bloque, solo se puede acceder en el bloque donde se declaró.
const, alcance de bloque, solo se puede acceder en el bloque donde se delcaró
*/
const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';

        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();
//apple
//banana
//kiwi

/**********************************************/
//con let, tiene alcance de bloque
let x = 1;
{
    let x = 2;
    console.log(x);//2
}
console.log(x); //1

//con var, tiene alcance de función, es decir no respeta al bloque
var x = 1;
{
    var x = 2;
    console.log(x);//2
}
console.log(x); //2

/*************************************************** */
//Ciclo for con VAR
const myFunc = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}
//Accede al último valor ya que la asignación con VAR no respeta el bloque, sino que se puede acceder desde cualquier parte dentro de la función myFunc
myFunc();// 10 10 ... 10 (10 veces)

//Ciclo for con LET
const myFunc = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}

//En cada iteración se crea un bloque, el setTimeout no puede acceder al valor final de i que es 10, solo usa la asignación dada en cada iteración, es decir let i = {0, 1, ...9}
myFunc();//0 1 2 ...9