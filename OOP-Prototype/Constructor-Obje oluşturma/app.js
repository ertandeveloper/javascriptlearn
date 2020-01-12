console.log(this); //Global Scope


function Employee(name,age,salary) { //Yapıcı fonksion - Constructor
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.showInfos=function () {
            console.log(this.name,this.age,this.salary);
        }
}
const emp1 = new Employee("Ertan",20,1000);
const emp2=new Employee("Behçet",20,1000);


console.log(emp1);
console.log(emp2);
emp1.showInfos();
emp2.showInfos();