let value;

const now=new Date(); // Şu anki zamanı almamızı sağlar

const date1=new Date("2-27-200 23:52:11");

const date2 =new Date("April 19 2000");

const date3 =new Date("2/27/2000");

value=date1;
value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();


value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();


//Değer değiştirme


date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1999);
date1.setHours(0);
date1.setMinutes(14);
date1.setSeconds(30);


value=date1;



console.log(value);