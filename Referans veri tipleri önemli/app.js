// let a = "Ertan";
// let b = "Ertan";
//
// if (a === b) {
//     console.log("Eşit");
// }


//Referans veri tipleri
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];

// const person1={
//     name:"Ertan",
//     age:25
// };
// const person2={
//     name:"Ertan",
//     age:25
// };
//
// if (person1 === person2) { //False dönücek çünkü referans veri tiplerinde içindeki değer değil bellekteki yeri aynı mı diye bakılıyor bu işlemde
//     console.log("Eşit");
// }


const cities=new Map();
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");
console.log(cities.get([1,2,3])); //Undifend döner sebebi ise array(referans veri tipi) bellekti yeri bakar şu an ikisede farklı bir yeri gösteriyor


const cities=new Map();
const key=[1,2,3];
cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set(key,"Array");
console.log(cities.get(key)); //Burada Array sonucunu alırız çünkü bellekte aynı yeri gösteriyorlar artık

