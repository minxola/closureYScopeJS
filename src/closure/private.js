const person = () => {
    var saveName = "Name"; //variable privada
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

//-----------------------------------------------
//Creando otro ambito lexico
const otherPerson = person();
console.log(otherPerson.getName()); //Name

otherPerson.setName('Rem');
console.log(otherPerson.getName()); //Rem