/*
Objects - object contains properties and behaviour(methods)
Object contains variables and methods (Java)
Object is a collection of key and value pairs (JS/TS)


Different ways to create an object in JS/TS
1. Using 'object' type - Directly defines the values and variable (JS/TS)
2. Inline Type Object - we also define the datatype of the keys (TS)
3. Using type aliases (TS)
4. Using the classes (JS ES16/TS)
*/
//----------------------------------------------------------------------------------------------------------------------------

//1. Using 'object' type - Directly defines the values and variable (JS/TS)
// The Typescript 'object' type represents all values that are not in premitive types.
let employee = {
    name:"John", 
    age:30, 
    job:"Engineer", 
    Salary:50000,
    getDetails:function(){
        console.log(this.name,this.age,this.job,this.Salary)
        return `${this.name} is a ${this.age} ${this.job} ${this.Salary}`
    }
}

console.log(typeof(employee)) //object

//Accessing object - App 1(Using . notation)
console.log(employee.name, employee.age, employee.job, employee.Salary, employee.getDetails())

//Accessing object - App 2(Using bracket notation)
console.log(employee["name"], employee["age"], employee["job"], employee["Salary"], employee["getDetails"]())

//Modify the value
employee.job="Senior Engineer"
console.log(employee["job"])
employee["job"]="Manager"
console.log(employee.job)
//----------------------------------------------------------------------------------------------------------------------------

//2. Inline Type Object - we also define the datatype of the keys (TS)
let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
} =
{
    name:"Scott",
    age:15,
    grade:"A",
    getSummary: function()
    {
        return `${this.name} ${this.age} ${this.grade}`
    }
}
console.log(student.getSummary())
//---------------------------------------------------------------------------------------------------------------------------- 

//3. Using type aliases (TS) - allows creating a new name for an existing type
type product = 
{
    name:string,
    price:number,
    getInfo:()=>string
}

let book1:product = 
{
    name:"learn java",
    price:200,
    getInfo: function(){
        return `${this.name} ${this.price}`
    }
}

let book2:product = 
{
    name:"learn python",
    price:300,
    getInfo: function(){
        return `${this.name} ${this.price}`
    }
}
console.log(book1.getInfo())
console.log(book2.getInfo())

//Example 2 : Iteration Types
type personal= {
    name:string,
    age:number
}
type contact= {
    email:string,
    phone:number
}
type Candidate = personal & contact & {
    getContactInfo: () => string
}

let cand:Candidate = {
    name:"john",
    age:25,
    email:"abcd@gmail,com",
    phone:12345678,
    getContactInfo: function(){
        return `${this.name} ${this.age} ${this.email} ${this.phone}`
    }
}

console.log(cand.getContactInfo())
//----------------------------------------------------------------------------------------------------------------------------

//4. Using the classes (JS ES16/TS)
class Person {
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string, firstName:string, lastName:string)
    {
        this.ssn=ssn
        this.firstName=firstName
        this.lastName=lastName
    }

    getFullName():string {
        return `${this.firstName} ${this.lastName}`
    }

    getDetails():string {
        return `${this.ssn} ${this.getFullName()}`
    }
}

let person1 = new Person("12345", "John", "Kennedy")  //Object creation
console.log(person1.getDetails())

let person2 = new Person("67890", "Will", "Smith")  //Object creation
console.log(person2.getDetails())