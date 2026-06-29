/*
An Interface in TS is a way to define the structure of an object.
It tells the compiler what properties and types an object should have
It's like a blueprint for objects

Abstract Method - It have only signature of a method (there is no implementation)
interface interfaceName
{
properties
abstract methods
}

1.Regular Properties
2.Optional Properties
3.Readonly Properties and function types
4.Extending interfaces
5.Class implements interface
*/

//Ex.1: Basic Interface (Regular properties)
interface Person1 
{
    name:string;
    age:number;
}

let student:Person1 =
{
    name:"John",
    age:25
}

console.log(student.name);
console.log(student.age);
console.log(student);

//Ex.2: Optional properties (?)
interface Employee
{
    eid:number;
    ename:string;
    edepartment?:string;
}
let emp1:Employee =
{
    eid:101,
    ename:"John",
}
let emp2:Employee =
{
    eid:101,
    ename:"John",
    edepartment:"Accounts"
}
console.log(emp1.eid,emp1.ename,emp1.edepartment);   //101 John undefined
console.log(emp2.eid,emp2.ename,emp2.edepartment);   //101 John Accounts

//Ex.3: Readonly properties (readyonly to prevent modification) & function type 
interface Book
{
    title:string;
    readonly isbn:string;
    display():void;
}
let b1:Book=
{
    title:"Learn Playwright",
    isbn:"ABC",
    display():void{
        console.log(b1.title, b1.isbn);
    }
}
console.log(b1.title, b1.isbn) //Learn Playwright ABC
b1.display(); //Learn Playwright ABC

b1.title="Learn typeScript";
console.log(b1.title) //Learn typeScript
//b1.isbn="XYZ"; //Error:Cannnot assign to isbn bcaz it is read-only property

//Ex.4: Extending Interface (Inheritance is applicable)
interface Animal
{
    name:string;
}
interface Color extends Animal
{
    color:string;
}
let dog:Color=
{
    name:"Buddy",
    color:"Black"
}
console.log(dog.name,dog.color);  //Buddy Black

//Ex.5: Class implements interface
interface Course
{
    name:string;
    display():void;
}
class Details implements Course
{
    name:string;
    title:string;
    constructor(name:string,title:string)
    {
        this.name=name;
        this.title=title;
    }
    display(): void {
        console.log("Welcome to", this.name)
    }
}

let obj = new Details("Java", "Hello")
console.log(obj.name, obj.title);  //Java Hello
obj.display();   //Welcome to Java