//Para ejecutar en console (debugger)
var a = "Hello";

function hello () {
    let b = 'Hello world';
    const c = 'Hello world!';
    if(true){
        let d = 'Hello world!!';
        debugger;
    }
}

hello();

//Para ejecutar en el console (debugger)
//closure
const moneyBox = (coins) => {
    debugger; //Cuando entre a la función
    var savedCoins = 0;
    const countCoins = (coins) => {
        debugger;
        savedCoins = savedCoins + coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }
    debugger;
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);