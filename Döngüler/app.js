// While Döngüleri
/*
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;//i++;

}*/

/*let i = 10;
while (i > 0) {
    i -= 2; //Her döngüde 2 azalıcak
    console.log(i);
}*/

//Break ve Continue

/*let i = 0;
/!*while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i += 1;
}*!/
while (i < 10) { //Sonsuz Döngü olayı
    if (i == 3 || i == 5) {
        i += 1;
        continue;
    }
    console.log(i);
    i += 1;

}*/

//Do While

/*let i=0;
do{
console.log(i);
i +=1;
}while(i<10);*/


const langs = ["Javascript", "Python", "Java"];
/*let index =0;
while(index <lang.length){
    console.log(lang[index]);
    index++;
}*/

/*
//For
for(let index=0; index<lang.length;index++){
    console.log(lang[index]);
}
*/
//ForEach
/*langs.forEach(function (lang, index) {
    console.log(lang, index);
});*/

//Map
/*
const user=[
    {
        name:"Mustafa",
        age:40,
    },
    {
         name:"Zeynep",
         age:20,
    },
    {
        name:"Ali",
        age:12,
    }
];

const names=user.map(function (user) {
    return user.name;
});

const ages=user.map(function (user) {
return user.age;
});
console.log(names);
console.log(ages);
*/

//For in
const user = {
    name: "Mustafa",
    age: 40,
};

for(let key in user){
    console.log(key,user[key]);
}





