//En este caso no se genera un closure o clausura
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);//$5
moneyBox(10);//$10

/*
GENERANDO UN CLOSURE O CLAUSURA
*/
const moneyBox = (coins) => {
    var savedCoins = 0;
    const countCoins = (coins) => {
        savedCoins = savedCoins + coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }
    return countCoins;
}

/*
myMoneyBox es un CLOSURE, es un tipo especial de objeto
que combina: Una Función y El Ámbito donde se creó esa función.
*/
let myMoneyBox = moneyBox();

/*
Un closure puede recordar y acceder a variables y argumentos
de su función externa, incluso despues de que la función
externa haya finalizado.

Un closure es una función o un Objeto con funciones, que recuerda
el estado de las variables al momento de ser invocada, y conserva
este estado a través de reiteradas ejecuciones.
*/
myMoneyBox(4); //MoneyBox: $4
myMoneyBox(6); //MoneyBox: $6
myMoneyBox(10); //MoneyBox: $10