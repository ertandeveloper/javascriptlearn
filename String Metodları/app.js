let value;

const firstName="Ertan";
const lastName="Dönmez";

const langs="Java,Python,C++";

value=firstName+" "+lastName;
value="Ertan Dönmez";
value += " Behçet"; //value =value + " Behçet";
value=firstName.length; // Kaç karakter
value=firstName.concat(" ",lastName," ","Hiphop"); //firstName+ " " + ...
value=firstName.toLowerCase();//Küçük karekter
value=firstName.toUpperCase();//Büyük karekter
value=firstName[0];//Belirtilen indeks  karekterini alıyor
value=firstName[firstName.length-1];//Son elemanı almak için

//Index Of
value=firstName.indexOf("r");
value=firstName.indexOf("t");
value=firstName.indexOf("e"); //İçinde aradığımız değer yoksa -1 çıkar

//Char At
value=firstName.charAt(0);
value=firstName.charAt(firstName.length-1);

//Split
value=langs.split(","); //Parçalama methodu neye ögre virgüle(,) göre parçaladı ve array haline getirdi.


//Replace
value=langs.replace("Python","CSS");//String içinden belli bir yeri değiştirmek istesek ilk değişecek değer sonra yerini alcak değer

//Includes
value=langs.includes("Java");//String içinde arama yapma varsa true yoksa false döner
value=langs.includes("Javascript");//String içinde arama yapma varsa true yoksa false döner






console.log(value);