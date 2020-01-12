// //Kalıtım - Inheritance
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Person.prototype.showInfos = function () {
//     console.log("İsim:" + this.name + "Yaş:" + this.age);
// };
//
// /*
// const person=new Person("Ertan",20);
// console.log(person);*/
//
// function Employee(name, age, salary) {
//     /* this.name = name;
//      this.age = age;*/
//     Person.call(this,name,age);
//     this.salary = salary;
// }
//
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("ToString methodu kendi prototype");
// };
// //Overriding - İptal Etme
// Employee.prototype.showInfos = function () {
//     console.log("İsim:" + this.name + "Yaş:" + this.age + "Maaş:" + this.salary);
//
// };
// const emp = new Employee("Ertan", 20, 2000);
// /*emp.showInfos();
// emp.toString();*/
// console.log(emp);

//ES6 Kalıtım

class Person { //Superclass,BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim:" + this.name + "Yaş:" + this.age);
    }
}

class Employee extends Person {  //DerivedClass,Subclass,ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age);//Call
        this.salary = salary;
    }

    showInfos() {
        console.log("İsim:" + this.name + "Yaş:" + this.age + "Maaş:" + this.salary);
    }

    toString() {
        console.log("Employee");
    }

    raiseSalary(amount) {
        this.salary +=amount;
    }
}

const emp = new Employee("Ertan", 20, 3000);
emp.raiseSalary(500);
emp.showInfos();
emp.toString();