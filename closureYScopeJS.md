# Curso de Closures y Scope en JavaScript

Curso por: **Oscar Barajas Tavares**

## Bienvenida

### 1. Lo que se aprenderá sobre closure y scope

- Closures
- Scopes
- Bloques y funciones
- Hoisting
- Debugging

## Scope

### 2. Que es Scope y como funciona el Global Scope

#### Scope:

Es el **alcance** que va tener una variable dentro del código. Es decir, el **Scope** decide a que bloques de código va a acceder una variable.

#### Global Scope

Se refiere a variables que no están dentro de funciones o bloques, por que que se puede acceder a ellas de manera **global**, es decir desde cualquier parte del código.

```js
//variables con alcance global (no estan dentro de funciones ni bloques)
var a = 100;
let b = 'Hello';
const c = 3.14;

//Estas varialbes pueden ser accedidas desde una función
const myFunction = () => {
    console.log(a);
    console.log(b);
    console.log(c);
}
//Al ejecutar la función no se tendría problemas
myFunction();
//100
//Hello
//3.14
```

___

#### var

`var`, esta se puede declarar nuevamente y volver a reasignar un nuevo valor (aunque es una mala práctica).

```js
var m = 100;
var m = 45;
m = 50;
console.log(m); //50
```

#### let

`let`, esta ya no se puede volver a declarar, mas sí se puede reasignar.

```js
let a = 100;
a = 200;
console.log(a); //200
let a = 500; //SyntaxError
```

#### const

`const`, no se puede volver a declarar, ni reasignar (su valor no se puede cambiar)

```js
const x = 44;
x = 100; //TypeError: Assignment to constant variable.
const x = 400; //SyntaxError
```

#### Malas practicas que pueden crear variables globales

- Al declarar una variable sin las palabras reservadas, se puede hacer una variable global.

  ```js
  const myFunction = () => {
      //no se usó la palabra reservada var, let o const
      message = 'Hello world';
  }
  myFunction();
  console.log(message); //Hello world
  ```

- Al hacer doble declaración dentro de una función

  ```js
  const myFunction = () => {
      var localVar = globalVar = 'I am global';
  }
  myFunction();
  console.log(globalVar); //I am global
  ```

### 3. Local Scope

El scope se puede definir como el alcance que puede tener una variable en tu codigo.

**El Local Scope:** se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El local scope puede ser:

- Local Scope de Función
- Local Scope de Bloque

```js
const myFunction = () => {
    const msg = 'Hello World';
    console.log(smg);
}
//ejecutar la función, tiene acceso local
myFunction(); //Hello World

//Intentar acceder a la variable smg, da error, no es global, no puede acceder a la variable declarada dentro de la función.
console.log(msg); //ReferenceError: msg is not defined

```

**El ambito lexico:** se refiere a que una funcion puede acceder a una funcion o variable en el contexto donde se definió, solo al no encontrarla buscará su definición en un ámbito superior hasta encontrar la primera difinición. Se dará prioridad al local scope en lugar del global scope.

```js
var scope = 'I am global';

const scopeFunction = () => {
    var scope = 'I am just a local';
    const otherFunction = () => {
        return scope;
    }
    console.log(otherFunction());
}

//Al ejecutar la función, solo toma la variable local, no reasigna el valor de scope, por mas que esté en global, esto es ambito lexico
scopeFunction(); //I am just local

//Al imprimir el scope, este accede a 'scope' global, ya que se encuentra en su ambito, y no puede acceder a la variable declarada dentro de la función, por ser solo local
console.log(scope); //I am global
```

### 4. Function Scope

Las variables declaradas dentro de una función solo pueden ser accedidas dentro de ese ámbito. 

```js
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
```



Se debe tener cuidad al declarar variables, de preferencia usar `let` y `const` ya que `var` puede traer algunos problemas.

### 5. Block Scope

Un bloque es un espacio de código delimitado por llaves, puede darse en casos de loops y condicionales. Al declarar variables `var` tiene alcance de función, `let` y `const` tienen alcance de bloque.

```js
const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        var fruit2 = 'banana';
        var fruit3 = 'kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
//ejecutar la función
fruits();
//apple
//banana
//kiwi
```

El código anterior funciona sin problemas, ya que var tiene un **scope de función**, es decir se puede acceder a la variable declarada con `var` desde cualquier parte del código siempre que esté dentro de la función.

```js
const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
//al ejecutar la funcion nos da error
fruits();
//apple
//ReferenceError, fruit2 is not defined
```

En el código anterior, al ejecutar la función, solo se imprime apple ya que fue declarada con var, para `let` y `const` nos dará un error de referencia, ya que no se puede acceder a dichas variables por tener un **scope de bloque**.

Para poder acceder correctamente a estas variables el código se tendría que modificar, según el alcance de las variables.

```js
const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
		//block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    //function scope
    console.log(fruit1);
}

fruits();
//apple
//banana
//kiwi
```

---

```js
let x = 1;
{
    let x = 2;
    console.log(x);//2
}
console.log(x); //1
```

En el código anterior,  el `console.log(x)` dentro del bloque accede a la variable local `let x = 2` debido a que está en su ámbito léxico.

El `console.log(x)` que esta fuera del bloque, no puede acceder a la asignación `let x = 2` ya que tiene un alcance local de bloque, sin embargo si puede acceder a la declaración `let x = 1` ya que esta fuera del bloque, es decir en su ámbito léxico.

Si cambiamos el código a lo siguiente:

```js
var x = 1;
{
    var x = 2;
    console.log(x);//2
}
console.log(x); //2
```

En este caso al imprimir `console.log(x)`, en ambos casos nos da el valor de `2`, debido a que `var` tiene un alcance de función y no de bloque. En este caso primero se asigna `var x = 1` y luego se hace una re-declaración y re-asignación `var x = 2`, que es el último valor que se imprime.

Por eso no se debe declarar variables con `var` dentro de un bloque, se debe preferir en este caso `let`.

---

Cuando creamos un ciclo con la declaracion de la variable usando `var`

```js
//Ciclo for con VAR
const myFunc = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}

myFunc();// 10 10 10 10 ....(10 veces)
```

En el código anterior sucede lo siguiente:

- En la primera iteración `i = 0` crea un bloque donde se ejecuta `setTimeout()`, que imprimirá su `console.log(i)` cuando pase el tiempo indicado.
- En la segunda iteración `i = 1` se creará otro bloque con otro `setTimeout()`, que imprimirá su `console.log(i)` cuando pase el tiempo indicado.
- Así se realiza cada iteración hasta terminar, el loop se detiene cuando `i = 10`, ya que no se cumple la condición, ya no se crea otro bloque.
- Cuando pase el tiempo indicado, se ejecutarán todos los callback queue `setTimeout()`
- Al intentar imprimir `console.log(i)`, el valor que tomarán será el final, puesto que la declaración con `var i` no respeta el bloque, sinó la función `myFunc`. Es decir se puede acceder al valor de `i` desde cualquier parte dentro de la función, en cada iteraicón el valor de `i` se está reasignando.
- Se imprimira en cada iteración el valor final `i = 10`

Sin embargo, si cambiamos la asignación de la variable con `let`:

```js
//Ciclo for con LET
const myFunc = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000);
        
    }
}

myFunc();//0 1 2 ...9
```

- Para el caso de que la variable es declarada con `let`, cada llamada a `setTimeout()` tiene asignado un valor de `i` según su iteración, por lo tanto al momento de imprimir `console.log(i)` se imprimirá el valor de `i` dentro del bloque, imprimiendose en este caso desde 1 hasta 9, ya que el valor de `i = 10` ya no cumple con la condición, por lo que no se genera un bloque final.

En resumen:

|                               | `var`   | `let`  | `const` |
| ----------------------------- | ------- | ------ | ------- |
| Scope                         | FUNCION | BLOQUE | BLOQUE  |
| Re-Asignación                 | SI      | SI     | NO      |
| Re-Declaración                | SI      | NO     | NO      |
| Declaración sin valor inicial | SI      | SI     | NO      |

## Closure

### 6. Que es un closure

Una **clausura** o **closure** es una función que guarda referencias del estado adyacente (**Ámbito léxico**). En otras palabras, una **clausura** permite acceder al ámbito de una *función exterior* desde una *función interior*.

Otra definición sería, que un **Clousure** es la combinación entre una *función* y el *ámbito léxico* en el que esta fue declarada. Con esto, la función *recuerda* el ámbito en el que se creó.

```js
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
myMoneyBox es un CLOSURE, un tipo especial de objeto
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
```



### 7. Ámbito léxico en closures

La palabra ***léxico*** hace referencia al hecho de que el ámbito léxico se basa en el lugar donde una variable fue declarada para determinar dónde esta variable estará disponible. Las funciones anidadas tienen acceso a las variables declaradas en su ámbito exterior.

```js
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

//Se crea un scope o entorno léxico
const count1 = buildCount(1);
count1(); //1
count1(); //2
count1(); //3

//Se crea un nuevo scope o entorno léxico
const count2 = buildCount(10);
count2(); //10
count2(); //11
count2(); //12
```

### 8. Como crear variables privadas con closures

Lenguajes como Java ofrecen la posibilidad de declarar métodos privados, es decir, que sólo pueden ser llamados por otros métodos en la misma clase.

JavaScript no proporciona una forma nativa de hacer esto, pero es posible emular métodos privados utilizando closures. Los métodos privados no son sólo útiles para restringir el acceso al código: también proporcionan una poderosa manera de administrar tu espacio de nombres global, evitando que los métodos no esenciales embrollen la interfaz pública de tu código.

```js
const person = () => {
    var saveName = "Name";
    return {
        getName: () => { return saveName },
        setName: (name) => { saveName = name; },
    };
};

/*
No se podrá acceder desde fuera a la variable saveName, ya
que se hizo PRIVADA usando closures.
Solo se le puede modificar usando los métodos establecidos
en person()
*/

//Generando un ámbito lexico
const newPerson = person();
console.log(newPerson.getName()); //Name

newPerson.setName('Oscar');
console.log(newPerson.getName()); //Oscar

//Creando otro ambito lexico
const otherPerson = person();
console.log(otherPerson.getName()); //Name

otherPerson.setName('Rem');
console.log(otherPerson.getName()); //Rem
```

### 9. Loops

Se debe tener cuidado al momento de hacer loops pues se podría estar generando closures involuntariamente, haciendonos perder el control de nuestro código y se ejecute de maneras inesperadas.

```js
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
```

## Hoisting

### 10. Que es Hoisting

En variables el hoisting se genera en la declaración de las mismas, es decir que la declaración de las variables se separa de su asignación.

```js
a = 2;
var a;
console.log(a); //2
/*
El hoisting genera:
var a; //No tiene valor asignado
a = 2; //Se le asigna un valor de 2
console.log(a); //>2
*/
```

___

Si antes llamamos a `console.log()` en este caso también se genera hoisting.

```js
console.log(b); //undefined
var b = 10;

//EL HOISTING SE GENERA EN LA DECLARACIÓN DE LA VARIABLE
//Le asigna un valor de undefined
/*
var b; //No tiene valor asignado, no esta definido (undefined)
console.log(b); //>undefined
var b; //no tiene valor definido (undefined)
b = 10; //valor definido igual a 10
*/
```

---

Cuando se declaran funciones también se puede generar hoisting

```js
//Se genera el hoisting
printName('Elmo'); //Elmo

function printName (name) {
    console.log(name);
}

/*
El Hoisting eleva la función:
function printName (name) {
    console.log(name);
}

printName('Elmo'); //Elmo
*/
```

El hoisting lo que hace primero es elevar la función antes de ejecutar el llamado de la misma, por eso que al ejecutar la función, esta no tiene problema de imprimir el resultado.

---

El **Hoisting** se da en:

- **Declaración de variables** con `var`, no en asignación
- `function`, se da hoisting completo
- `import` también tiene hoisting completo
- Las clases no sufren hoisting

Esto pasa en el momento que se compila el código, antes de ser interpretado por el navegador.

## Debugging

### 11. Debugging

En navegador **Chrome** tiene herramientas de debugging (**Chrome DevTools**), en las cuales podemos correr código y evaluar su comportamiento, para esto debemos agregar en nuestro código, la palabra reservada `debugger` justo donde queremos que la ejecución del código se detenga.

```js
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
```

## Cierre

### 12. Conclusiones

- Scope
  - Global
  - Local
    - Function Scope
    - Block Scope
- Closures
- Hoisting
- Debugging

**Never stop learging**



