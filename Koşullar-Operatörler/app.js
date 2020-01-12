//Karşılaştırma Operatörleri

//==
//===
//!=
//!===
//<
//>
//>=
//<=

// console.log(2 == 2);
//
// console.log("js" == "Java");
//
// console.log(2 == "2"); //String çevirdiği için true çıkıyor.
//
// console.log(2 === "2"); //Tiplerini kontrol eder ve false çıkar.
//
// console.log(4 >2);
//
// console.log(2>4);
//
// console.log(2!=4); // eşit değil mi ? eşit değil true
//
// console.log(2<4);
//
// console.log(4<2);
//
// console.log(4>=2);
//
// console.log(2<=4);


//Mantıksal Bağlaçlar

//Not Operatörü
// console.log(!(2 == 2)); //true ise false ,false ise true
//
// //And Operatörü
// console.log((2==2) && ("Ahmet"== "Ahmet")); //En az biri bile false olursa false çıkar sonuç.
//
// //Or Operatörü
// console.log((4==2) || ("Ahmet" =="Ahmet")); // En az bir değer true olursa true çıkar.


/*const error=false;

if(error== true){
    console.log("Hata oluştu");
}else{
    console.log("Hata oluşmadı")
}*/

/*const user = "mmc";

if (user === "mmc") {
    console.log("Kullanıcı Bulundu");
} else {
    console.log("Kullanıcı bulunmadı");
}

const process = "1";

if (process === "1") {
    console.log("İşlem 1")
} else if (process === "2") {
    console.log("İşlem 2");
}else{
    console.log("İşlem Hatalı");
}*/

const number = 100;
/*
if (number === 100) {
    console.log("sayı 100'e eşit");
} else {
    console.log("sayı 100'e eşit değil");
}*/

//Ternary Operator
console.log(number === 100 ? "Sayı 100" : "sayıl 100 değil");

if(number==100) console.log("sayı 100");
else console.log("sayı 100 değil");
