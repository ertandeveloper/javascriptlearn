//Mapler -Key(Anahtar) -Value(Değer)


let myMap=new Map(); //Oluşturduk

// const key1="Ertan";
// const key2={
//     a:10,b:20
// };
// const key3=()=>2;
//Set
// myMap.set(key1,"String değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");

//Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
// console.log(myMap);


//Map Boyutu
// console.log(myMap.size);

// const cities=new Map();
// cities.set("Ankara",5);
// cities.set("İstabul",15);
// cities.set("izmir",4);


//For Each
// cities.forEach(function (value,key) {
//     console.log(key,value);
// });

//For OF
// for(let [key,value] of cities){ //Destructing yapısı var
//     console.log(key,value);
// }

//Maps keys
// for(let key of cities.keys()){
//         console.log(key);
// }

//Maps value
// for(let key of cities.values()){
//     console.log(key);
// }


//Arraylerden map oluşturma
// const array=[["key1","value1"],["key2","value2"]];

// const lastMap=new Map(array);
// console.log(lastMap);

//Maplerden array oluşturma
const cities=new Map();

cities.set("Ankara",5);
cities.set("İstabul",15);
cities.set("izmir",4);

const array =Array.from(cities);
//[["Ankara",5]["İstanbul",15]["İzmir",4]]
console.log(array);



