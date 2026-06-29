
class Calculator
{
    // Constructor Overloading
    constructor();
    constructor(a:number, b:number);

    constructor(a?:number, b?:number)
    {
        if(a!==undefined && b!==undefined)
        {
            console.log(a+b)
        }
        else
        {
            console.log("Default constructor called")
        }
    }


    //Method Overloading
    add(a:number, b:number):number;
    add(a:number, b:number, c:number):number;

    add(a:number, b:number, c?:number):number
    {
        if(c!==undefined)
        {
            return a+b+c;
        }
        return a+b;
    }
}

let cal1 = new Calculator();
let cal2 = new Calculator(10,20);

console.log(cal1.add(20,30));
console.log(cal1.add(20,30,40));