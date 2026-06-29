class Person 
{
    public name:string;  // public - accessible anywhere
    protected age:number; // protected - accessible within the class and subclass
    private ssn:number; // private - accessible only within the class

    constructor(name:string, age:number, ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    displayInfo()
    {
        console.log(this.name)
        console.log(this.age)
        console.log(this.ssn)
    }
}

class Employee extends Person
{
    private id:number;

    constructor(name:string, age:number, ssn:number, id:number)
    {
        super(name, age, ssn);
        this.id=id;
    }

    showInfo()
    {
        console.log(this.name)  // public - accessible
        console.log(this.age)   // protected - accessible
       // console.log(this.ssn)   // private - not accessible
        console.log(this.id)    // - private - accessible
    }
}

let emp = new Employee("John", 25, 12345, 101);
emp.displayInfo();
emp.showInfo();

console.log(emp.name); // public - accessible
//console.log(emp.age); // protected - not accessible
//console.log(emp.ssn); // private - not accessible
//console.log(emp.id); // private - not accessible

