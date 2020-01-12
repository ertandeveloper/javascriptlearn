/*const merhaba=function () {
    console.log("Merhaba");
};
merhaba();*/

//Arrow Function
/*const merhaba=() =>{
    console.log("Merhaba");
};
merhaba();*/

//Tek Parametre alıcaksa Parantezlerde gidebilir
/*const merhaba = firsName => {
    console.log("Name", firsName);
};*/

//Tek bir işlem yapıyor ise süslü parantezlerede gerek yok
/*const merhaba = firsName => console.log("Name", firsName);
merhaba("Ertan");*/


/*const cube = function (x) {
    return x * x * x;
};

console.log(cube(4));*/

//Arrow Function

const cube = x => x * x * x;  //Tek bir işlem yapıyorsak return yazmana gerek yok
console.log(cube(4));
