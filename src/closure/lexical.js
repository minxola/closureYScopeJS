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