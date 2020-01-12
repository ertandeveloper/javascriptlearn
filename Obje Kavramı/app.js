let value;
const programmer={
    name:"Ertan Dönmez",
    age:"19",
    email:"a@gmail.com",
    lang:["Javascript","C#"],
    address:{
        city:"Aydın",
        street:"Kuşadası",
    },
  work:function () {
        console.log("Programcı Çalışıyor");
  }
};
value=programmer;
value=programmer.email; //Genel olarak
value=programmer["email"];
value=programmer.lang;
value=programmer.address.city;
programmer.work();

const programmners=[
    {
        name:"Ertan Dönmez",
        age:"20",
    },
    {
        name:"Behçet Dönmez",
        age:"19",
    }
];
value=programmners[0];
value=programmners[0].name;

console.log(value);