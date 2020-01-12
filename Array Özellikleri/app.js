let value;


//Tercih etmem gereken
const numbers = [12, 31, 414, 51];

/*
//Tercih etmemen gereken ikiside aynı iiş yapıyor
const numbers2 = new Array(112, 1, 31, 41);
*/

const langs=["Python","Java","C++","Javascript"];

const a=["Merhaba",22,null,undefined];

//Uzunluğı
value=numbers.length;
//Indeks Değeeri
value=numbers[2];
//Son ELemanı
value=numbers[numbers.length-1];

//herhangi bir indeks'deki elemanı değiştirme
numbers[2]=1000;
value=numbers;


//Indeks Of
value=numbers.indexOf(1000);

//Array Sonuna Değer ekleme - Push
numbers.push(2000);
value=numbers;

//Array Başına değer ekleme
numbers.unshift(9);
value=numbers;

//Array Sonundan değer atma
numbers.pop();
value=numbers;

//Başından değer atma
numbers.shift();
value=numbers;

//Splice belli bir indeksten belli bir indeks'e kadar değer atar
numbers.splice(0,3);
value=numbers;

//Array Sonuna Değer ekleme - Push
numbers.push(2000);
value=numbers;

//Array Tersine Çevirme
numbers.reverse();
value=numbers;

//İlk Rakamlarına göre sıralar
value=numbers.sort();


value=numbers.sort(function (x,y) { //Küçükten Büyüğe Sıralama
    return x-y;

});


value=numbers.sort(function (x,y) { //Büyükten Küçüğe Sıralama
    return y-x;

});


console.log(value);