//Spread Operator

const langs = ["Python", "C++", "Java", "Php"];

//Eski
//console.log(langs[0],langs[1],langs[2],langs[3]);
//Yeni
//console.log(...langs);

//İki Array birbirine bağlamak
//const lang2=["Javacript","C#",...langs];
//console.log(lang2);

//const numbers=[1,2,3,4,5,6,7,8,9];

//const [a,b,...numbers2]=numbers;
//console.log(a,b,numbers2);

const addNumbers = (a, b, c) => console.log(a + b + c);

const numbers = [100, 200, 300];

addNumbers(numbers[0], numbers[1], numbers[2]);

addNumbers(...numbers);


