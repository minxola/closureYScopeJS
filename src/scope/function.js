const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();//apple
console.log(fruit);//ReferenceError, fruit is not defined

const myFunction = () => {
    var x = 1;
    var x = 2;
    //let y = 4;
    let y = 8;
    console.log(x);
    console.log(y);
}
/*
Al ejecutar la función myFunction, nos dará un reference error, ya
que let no permite volver a declarar una variable.
Se recomienda solo trabajar con let y const para asignar variables

>>> Se comentó y = 4, ya que leto no permite volver a declara una
variable.
*/
myFunction();
//2
//8