//Sets
const mySet=new Set();
mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("ertan");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:10,b:20});

const mySet2=new Set([100,3.14,"ertan"]);


//console.log(mySet2);

//Size
console.log(mySet.size);

//Delete Metodu
// mySet.delete("ertan");


//Has Metodu
// console.log(mySet.has("ertan"));
// console.log(mySet.has(2000));
// console.log(mySet.has([1,2,3]));


//For Each
/*mySet.forEach(function (value) {
    console.log(value);
});*/

//For Of
// for(let value of mySet){
//     console.log(value);
// }

const array=Array.from(mySet)

console.log(array);







































