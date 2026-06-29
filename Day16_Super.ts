/*
super() - used to invoke immediate parent class constructor
super -  used to invoke immediate parent class method
super - cannot be used to invoke the parent class property (In java, it is possible)
*/

class Parent 
{
    num:number = 10;
    constructor()
    {
        console.log("Parent class constructor")
    }
    display()
    {
        console.log("Parent class display method")
    }
}

class Child extends Parent
{
    num:number = 20; // overriden
    constructor()
    {
        super(); // this will call parent class constructor (must be called)
        console.log("Child class constructor")
    }
    display() // overriden method
    {
        super.display(); // invoke parent class method
        console.log("Child class display method")
    }
    show()
    {
        //console.log(super.num); // not possible in TS/JS
        console.log(this.num); //20
        console.log("Child class show method")
    }
}

let c1 = new Child();
c1.show(); // child class
c1.display(); // child class