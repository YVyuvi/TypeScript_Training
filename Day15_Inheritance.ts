/*
Inheritance:
A class can reuse the properties and methods of another class
Inheritance is a mechanism where one class (child) can inherite the properties and methods of another class (parent)
Inheritance allows you to reuse the functionality of an existing class without rewriting it.

A ----> properties + methods (parent class/ base class/ super class)
B extends A ----> properties + methods (child class/ derived class/ sub class) 

Method Overriding:
A subclass/ child class can provide a specific implementation of a method that is already defined in its superclass
The method must have the same name, return type, and parameters.
*/

class Car 
{
    name:string;
    color:string;
    model:string;

    constructor(name:string, color:string, model:string)
    {
        this.name=name;
        this.color=color;
        this.model=model;
    }

    start()
    {
        console.log("Car Started")
    }

    stop()
    {
        console.log("Car Stopped")
    }

    displayInformation()
    {
        console.log(`Name:${this.name}, Color:${this.color}, Model:${this.model}`)
    }
}

class Honda extends Car
{
    year:number;

    constructor(name:string, color:string, model:string, year:number)
    {   
        super(name, color, model)
        this.year=year
    }
    //Override
    start()
    {
        console.log("Honda Started")
    }

    yom()
    {
        console.log(`Name:${this.name}, Color:${this.color}, Model:${this.model}, Year:${this.year}`)
    }
}

class Maruthi extends Car
{
    year:number;

    constructor(name:string, color:string, model:string, year:number)
    {   
        super(name, color, model)
        this.year=year
    }
    //Override
    stop()
    {
        console.log("Maruthi Stopped")
    }

    yom()
    {
        console.log(`Name:${this.name}, Color:${this.color}, Model:${this.model}, Year:${this.year}`)
    }
}

let honda = new Honda("Honda", "Black", "City", 2025);
console.log(honda.name); //Honda
console.log(honda.year); //2025
honda.start(); // called child class method(Overridden) /Honda Started
honda.displayInformation(); // Parent class /Name:Honda, Color:Black, Model:City
honda.stop();  // Parent class /Car Stopped
honda.yom();  // child class /Name:Honda, Color:Black, Model:City, Year:2025

let maruthi = new Maruthi("Maruthi", "White", "Suzuki", 2025);
console.log(maruthi.name); //Maruthi
console.log(maruthi.year); //2025
maruthi.start(); // Parent class /Car Started
maruthi.displayInformation(); // Parent class /Name:Maruthi, Color:White, Model:Suzuki
maruthi.stop();  // called child class method(Overridden) /Maruthi Stopped
maruthi.yom();  // child class /Name:Maruthi, Color:White, Model:Suzuki, Year:2025

//Parent Class variable is holding class object
let car:Car=new Honda("Honda", "Black", "City", 2025);
car.displayInformation(); // parent class /Name:Honda, Color:Black, Model:City
car.start(); // called child class method(Overridden) /Honda Started
car.displayInformation(); // Not accessible yom() because it is defined inside the child class but not there in the parent