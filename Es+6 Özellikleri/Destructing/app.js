//Destructing

// let number1,number2;

// arr=[100,200,300];

//ESKİ
// number1=arr[0];
// number2=arr[1];

//DESTRUCTING
//[number1,number2]=arr;
// const [number1,number2]=arr;

//Obje Destructing

//const numbers={
//    a:10,
//    b:20,
//    c:30,
//    d:40,
//    e:50
//};

//const {a,c,e}=numbers; //değişkenler ve obje içinde ki keyler aynı olmak zorunda sebebi ise değerleri key şeklinde eşleştiriyor.
//console.log(a,c,e);

//const {a:number1,c:number2,e:number3}=numbers; //Farklı bir isimde kullanmak istiyorsak ise bu şekilde kullanmalıyız
//console.log(number1,number2,number3);

//FUNCTION DESTRUCTING
const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();

console.log(lang1, lang2, lang3);

//Obje
const person = {
    name: "Ertan",
    year: 2000,
    salary: 100000,
    showInfos: () => console.log("Bilgiler Gösteriliyor")
};

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster}=person;

console.log(isim,yil,maas);
bilgileriGoster();





