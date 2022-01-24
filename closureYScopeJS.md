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

### 4. Function Scope

### 5. Block Scope

## Closure

### 6. Ámbito léxico en closures

### 7. Que es un closure

### 8. Como agregar variables privadas con closures

### 9. Loops

## Hoisting

### 10. Que es Hoisting

## Debugging

### 11. Debugging

## Cierre

### 12. Conclusiones


