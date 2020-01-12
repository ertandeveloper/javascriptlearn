// const object=new Object(); //Object Literal
// const object2=new Object();
// object.name="Ertan";
// console.log(object);

/*
function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Bilgiler gösteriliyor");
    };
    this.toString=function () {
        console.log("bu bir employe objesi");
    };
}

const emp1=new Employee("Ertan",20);
console.log(emp1);
console.log(emp1.toString());
console.log(emp1.deneme());*/


function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos=function () {
    console.log("İsim:" + this.name + "Yaş:" + this.age);
}

const emp1=new Employee("Ertan",20);
const emp2=new Employee("Behçet",19);

console.log(emp1);
console.log(emp2);


