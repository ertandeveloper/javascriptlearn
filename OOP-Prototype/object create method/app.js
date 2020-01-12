//Object Create
// const obj={
//     test1:function () {
//         console.log("test1");
//     },
//     test2:function () {
//         console.log("test2");
//     }
// }
//
// const emp=Object.create(obj);
// emp.name="Ertan";
// console.log(emp);
function Person() {

}

Person.prototype.test1 = function () {
    console.log("Test1");
};
Person.prototype.test2 = function () {
    console.log("Test2");
};

function Employee(name, age) {
    this.name = name;
    this.age = age;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.myTest=function () {
    console.log("MyTest");
}
const emp=new Employee("Ertan",20);
console.log(emp);
emp.test1();


