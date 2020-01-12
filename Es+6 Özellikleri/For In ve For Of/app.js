// FOR IN VE FOR OF
const person = {
    name: "Ertan Dönmez",
    age: 25,
    salary: 3000,
}
const langs = ["Python", "Java", "C++", "PHP"];

const name="Ertan";

//For In
//Object
// for(let prop in person){
//     console.log(prop,person[prop]);
// }

//Array
// for(let index in langs){
//     console.log(index,langs[index]);
// }

// for(let index in name){
//     console.log(index,name[index]);
// }


//For Of -Sadece Array benzeyen veri tipleri üzerinde gezinebiliyoruz.Direk value ulaşmak istersek

//Object -Gezinemiyoruz
// for(let value of person){
//     console.log(value);
// }

//Array
for(let value of langs){
    console.log(value);
}

//String
for(let character of name){
    console.log(character);
}


