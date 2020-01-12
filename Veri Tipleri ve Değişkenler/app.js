//Değişken Oluşturma

/*
var a=10;
var b=20;
var c=30;

console.log(a,b,c);*/

//Primitive

//Number
/*var a=10; //Number Veri Tipi
var b=3.14; //Number Veri Tipi
console.log(typeof a);
console.log(typeof b);*/

//String
/*var name ="Ertan";
console.log(name);
console.log(typeof name);*/

//Boolean
/*var a = true;
console.log(typeof a);*/

//Null
/*var a =null;
console.log(a);
console.log(typeof  a);*/

//Undefined
/*var a;
console.log(a);*/



//Reference

//Object
//Array
/*var numbers =[1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);
console.log(numbers[0]);

//Custom Object
var person={
    name:"Ertan Dönmez",
    age:20
}
console.log(person);
console.log(typeof person);

//Date Object
var date=new Date();
console.log(date);
console.log(typeof date);

//Function
var merhaba =function () {
    console.log("Merhaba");
};

console.log(merhaba);
console.log(typeof merhaba);*/



//Primitive ,Reference Veri tipi farkı
//Primitive =>Sadece Değeri kopyalanır.
/*var a = 10;

var b = a;

console.log(a, b);
a = 20;
console.log(a, b);*/


//Reference => Bellekte bir yer gösterir
/*var a =[1,2,3];

var b =a;

a.push(4);
console.log(b);*/


//Değişkenler

//Var
/*var name="Ertan Dönmez";
console.log(name);
name ="Behçet";
console.log(name);*/


//Let
/*let a,b;
a=10;
b=20;
console.log(a+b);*/

//Const
/*const name ="Ertan Dönmez";
console.log(name);
name="Ertan";

const a;t
a=10;
console.log(a);

const a=[1,2,3,4,5];
a=[1,2,3,4,5,6];
console.log(a);*/


//Veri Tiplerini Birbirine Dönüştürme
let value;
//Veri Tiplerini String'e Çevirme
value=String(123);
value=String(3.14);
value=String(false);
value=String(function () {
    console.log();
});
value=String([1,2,3]);
value=(10).toString();
value=(3.14).toString();
//Veri Tiplerini Sayılara Çevirme
value=Number("123");
value=Number(null);
value=Number(undefined);//Hiçbir Değer Yok NAN alıcaz
value=Number("Ertan");//Sayısal Değer Olmadığı için NAN
value=Number(function () {
    console.log()
});
value=Number([1,2,3]);//NAN
value=Number("3.14");
value=parseFloat("3.14");
value=parseInt("3");


const a ="Hello"+10;
console.log(a);
console.log(typeof a); //Otomatik olarak String çevirdi



console.log(value);
console.log(typeof value);








